import { Injectable } from '@angular/core';
import { Aufgabe } from '../models/aufgabe.model';
import { Jahr } from '../models/jahr.model';




@Injectable({
  providedIn: 'root',
})

export class TaskService {
  // via DB
  private jahr: Jahr[] = [
      {jahr: 2025, abgegebencounter: 2, abgegebencountermax: 3, erreichteprozent: 60, note: "befriedigend"},
      {jahr: 2026, abgegebencounter: 2, abgegebencountermax: 3, erreichteprozent: 60, note: "befriedigend"}
    ]
  private aufgaben: Aufgabe[] = [
    { id: '1', titel: 'Array-Sortierung', abgabeDatum: new Date('2025-06-10'), aufgabenjahr: 2025, status: 'offen' },
      { id: '2', titel: 'Datenbankmodellierung', abgabeDatum: new Date('2025-06-15'), aufgabenjahr: 2025, status: 'abgegeben' },
      { id: '3', titel: 'API-Integration', abgabeDatum: new Date('2025-06-20'), aufgabenjahr: 2025, status: 'bewertet' },
      { id: '4', titel: 'Frontend-Optimierung', abgabeDatum: new Date('2026-03-15'), aufgabenjahr: 2026, status: 'offen' },
      { id: '6', titel: 'Cloud-Deployment', abgabeDatum: new Date('2026-05-05'), aufgabenjahr: 2026, status: 'offen' },
      { id: '7', titel: 'Datenbank-Migration', abgabeDatum: new Date('2026-06-22'), aufgabenjahr: 2026, status: 'bewertet' },
      { id: '8', titel: 'Security-Audit', abgabeDatum: new Date('2026-09-30'), aufgabenjahr: 2026, status: 'offen' }
  ];
  generateDataFromUserID(benutzerID: number){
    //DB connection via DB.service.ts ps: keine Aufgaben nur rohdaten holen
  }
  constructor() {}
  // Gibt alle Aufgaben zurück
  getAlleAufgaben(): Aufgabe[]{
    return this.aufgaben;
  }
  getAllYears(): Jahr[]{
    return this.jahr;
  }

  // Gibt Aufgaben für ein bestimmtes Jahr zurück
  getAufgabenFuerJahr(jahr: number) {
    return this.aufgaben.filter(
      aufgabe => aufgabe.abgabeDatum.getFullYear() === jahr
    );
  }

  // Gibt eine Aufgabe anhand der ID zurück
  getAufgabeById(id: string) {
    return this.aufgaben.find(aufgabe => aufgabe.id === id);
  }
}
