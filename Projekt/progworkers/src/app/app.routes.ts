import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { TaskComponent } from './task/task.component';  


export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent },
    {path: 'registration', component: RegistrationComponent},
    {path: 'home', component: HomeComponent, canActivate: [authGuard] }, // token benötigt
    {path: 'task/:id', component: TaskComponent, canActivate: [authGuard] }, // token benötigt
    {path: '', redirectTo: 'login', pathMatch: 'full' }, 
];

