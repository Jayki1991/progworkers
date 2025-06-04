import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // für Fehlerausgabe


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  title = 'progworkers'; 
  error: string | null = null;
  isAdmin = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.error = 'Bitte E-Mail und Passwort eingeben.';
      return;
    }
    this.http.post<{ token: string; message: string }>('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log('Login erfolgreich!', res);
        const token = res.token; 
        if(token) {
          localStorage.setItem('token', token);  // Token speichern
          this.error = null;
          this.router.navigate(['home', this.email]); // nur durch Token
        } else {
          this.error = 'Token nicht erhalten!';
        }
      },
      error: (err) => {
        console.error('Login fehlgeschlagen', err);
        if(err.status === 0){
          this.error = "Wir haben zurzeit Probleme mit dem Dienst. Bitte informieren Sie einen Admin!"
        } else {
          this.error = 'E-Mail oder Passwort sind falsch!';
        }
        this.password = '';
        this.email = '';
      }
    });
  }
  registration(){
    this.router.navigate(['registration']);
  }
}

