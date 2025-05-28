import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // für Fehlerausgabe

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {
  vorname: string = '';
  nachname: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  jahrgang: number | null = null;
  jahrgaenge: number[] = [];
  error: string = '';
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.jahrgaenge = Array.from({ length: 2080 - 2025 + 1 }, (_, i) => 2025 + i);
  }

  registrieren(): void {
    if (!this.vorname || !this.nachname || !this.email || !this.jahrgang || !this.password || !this.passwordConfirm) {
      this.error = 'Bitte alle Felder ausfüllen!';
      return;
    }
    if (this.password !== this.passwordConfirm){
      this.error = 'Passwort stimmt nicht überein!';
      return;
    }
    this.router.navigate(['']);
    this.error = '';

    // Hier kannst du den Registrierungscode ergänzen, z.B. API-Call
    console.log('Registrierungsdaten:', {
      vorname: this.vorname,
      nachname: this.nachname,
      email: this.email,
      jahrgang: this.jahrgang
    });

    alert('Registrierung erfolgreich! TODO mach das besser!');
  }
  back(){
    this.router.navigate(['']);
  }
}
