import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor() { }
  
  getUserFromMail(mail: string): User{
    //TODO
    return {
      id: 123,
      name: "Test",
      vorname: "User",
      email: mail,
      jahrgang: 2025
    };
  }
}
