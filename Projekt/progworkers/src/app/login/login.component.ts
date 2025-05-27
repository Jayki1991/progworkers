import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.error = 'Bitte E-Mail und Passwort eingeben.';
      return;
    }

    this.http.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log('Login erfolgreich!', res);
        this.error = null;
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.error('Login fehlgeschlagen', err);
        this.error = 'E-Mail oder Passwort sind falsch!';
        this.password = '';
        this.email = '';
      }
    });
  }
}

