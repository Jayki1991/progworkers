import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Aufgabe {
  id: number;
  titel: string;
  abgabeDatum: Date;
  status: 'offen' | 'abgegeben' | 'bewertet';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})


export class HomeComponent {

  aufgaben: Aufgabe[] = [];
  lastToggle: HTMLElement | null = null;

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
    this.aufgaben = [
      { id: 1, titel: 'Array-Sortierung', abgabeDatum: new Date('2025-06-10'), status: 'offen' },
      { id: 2, titel: 'Datenbankmodellierung', abgabeDatum: new Date('2025-06-15'), status: 'abgegeben' },
      { id: 3, titel: 'API-Integration', abgabeDatum: new Date('2025-06-20'), status: 'bewertet' }
    ];
  }
}
