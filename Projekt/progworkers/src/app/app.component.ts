import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  email = '';
  password = '';
  title = 'progworkers'; 
  error: string | null = null;

  constructor(private http: HttpClient) {}

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
      },
      error: (err) => {
        console.error('Login fehlgeschlagen', err);
        this.error = 'E-Mail oder Passwort sind falsch.';
      }
    });
  }
}

