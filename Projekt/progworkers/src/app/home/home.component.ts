import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Aufgabe {
  id: number;
  titel: string;
  abgabeDatum: Date;
  aufgabenjahr: number;
  status: 'offen' | 'abgegeben' | 'bewertet';
}
interface Jahr{
  jahr: number;
  abgegebencounter: number;
  abgegebencountermax: number;
  erreichteprozent: number;
  note: string;
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
  jahr: Jahr[] = [];
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
    this.jahr = [
      {jahr: 2025, abgegebencounter: 2, abgegebencountermax: 3, erreichteprozent: 60, note: "befriedigend"},
      {jahr: 2026, abgegebencounter: 2, abgegebencountermax: 3, erreichteprozent: 60, note: "befriedigend"}
    ]
    this.aufgaben = [
      { id: 1, titel: 'Array-Sortierung', abgabeDatum: new Date('2025-06-10'), aufgabenjahr: 2025, status: 'offen' },
      { id: 2, titel: 'Datenbankmodellierung', abgabeDatum: new Date('2025-06-15'), aufgabenjahr: 2025, status: 'abgegeben' },
      { id: 3, titel: 'API-Integration', abgabeDatum: new Date('2025-06-20'), aufgabenjahr: 2025, status: 'bewertet' },
      { id: 4, titel: 'Frontend-Optimierung', abgabeDatum: new Date('2026-03-15'), aufgabenjahr: 2026, status: 'offen' },
      { id: 6, titel: 'Cloud-Deployment', abgabeDatum: new Date('2026-05-05'), aufgabenjahr: 2026, status: 'offen' },
      { id: 7, titel: 'Datenbank-Migration', abgabeDatum: new Date('2026-06-22'), aufgabenjahr: 2026, status: 'bewertet' },
      { id: 8, titel: 'Security-Audit', abgabeDatum: new Date('2026-09-30'), aufgabenjahr: 2026, status: 'offen' }
    ];
  }
  // Zum Aufteilen der Aufgaben in die richtigen Jahre
  getAufgabenFuerJahr(jahr: number): Aufgabe[] {
    return this.aufgaben.filter(a => a.aufgabenjahr === jahr);
  }
}
