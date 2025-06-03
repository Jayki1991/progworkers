import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { TaskService } from '../services/task.service';
import { Aufgabe } from '../models/aufgabe.model';
import { Jahr } from '../models/jahr.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule] ,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})


export class HomeComponent {

  aufgaben: Aufgabe[] = [];
  jahr: Jahr[] = [];
  lastToggle: HTMLElement | null = null;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private taskService: TaskService) {}

  toggleAccordion(event: Event) {
    const button = event.currentTarget as HTMLElement;
    button.classList.toggle('active');
    if (this.lastToggle && this.lastToggle !== button) {
      this.lastToggle.classList.remove('active');

      //das zugehörige Panel schließen
      const lastPanel = this.lastToggle.nextElementSibling as HTMLElement;
      if (lastPanel) {
        lastPanel.style.display = 'none';
      }
    }
    const panel = button.nextElementSibling as HTMLElement;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
    this.lastToggle = button;
  }
  

  ngOnInit(): void {
    // Beispiel-Daten (später aus Datenbank/API)
    this.aufgaben = this.taskService.getAlleAufgaben();
    this.jahr = this.taskService.getAllYears();

  }
  // Zum Aufteilen der Aufgaben in die richtigen Jahre
  getAufgabenFuerJahr(jahr: number): Aufgabe[] {
    return this.aufgaben.filter(a => a.aufgabenjahr === jahr);
  }
  showTask(aufgabe: any){
    this.router.navigate(['task', aufgabe.id], { state: { aufgabe } });
  }

}
