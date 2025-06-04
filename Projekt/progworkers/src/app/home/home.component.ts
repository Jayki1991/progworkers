import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { TaskService } from '../services/task.service';
import { Aufgabe } from '../models/aufgabe.model';
import { Jahr } from '../models/jahr.model';
import { User } from '../models/user.model';
import { DBService } from '../services/db.service';


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
  benutzer: User | null = null; // Daten müssen nach Login übergeben werden! TODO

  constructor(
    private route: ActivatedRoute, //Werte in der URL zugreifen
    private http: HttpClient, 
    private router: Router,
    private taskService: TaskService,
    private dbservice: DBService) {}

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
  
  generateUserFromLoginData(){
    this.benutzer = this.dbservice.getUserFromMail(this.route.snapshot.paramMap.get('email') ?? "");
  }
  ngOnInit(): void {
    // nimm die Mail aus der URL
    this.generateUserFromLoginData();
    // Beispiel-Daten (später aus Datenbank/API)
    console.log("generiere Benutzerdaten");
    if(this.benutzer){
      this.taskService.generateDataFromUserID(this.benutzer.id); //
      this.aufgaben = this.taskService.getAlleAufgaben();
      this.jahr = this.taskService.getAllYears();
    }
    

  }
  // Zum Aufteilen der Aufgaben in die richtigen Jahre
  getAufgabenFuerJahr(jahr: number): Aufgabe[] {
    return this.aufgaben.filter(a => a.aufgabenjahr === jahr);
  }
  showTask(aufgabe: any){
    this.router.navigate(['task', aufgabe.id], { state: { aufgabe } });
  }

}
