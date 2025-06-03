export interface Aufgabe {
  id: string;
  titel: string;
  abgabeDatum: Date;
  aufgabenjahr: number;
  status: 'offen' | 'abgegeben' | 'bewertet';
}