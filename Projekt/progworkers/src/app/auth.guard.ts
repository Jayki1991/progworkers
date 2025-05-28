import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  console.log('authGuard check, token:', token);

  if (token) {
    // Token vorhanden, Zugriff erlauben
    return true;
  } else {
    // Kein Token, zum Login weiterleiten
    router.navigate(['/login']);
    return false;
  }
};