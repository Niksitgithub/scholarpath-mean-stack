import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScholarshipDetailComponent } from './components/scholarship-detail/scholarship-detail.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },

  {
    path: 'scholarship/:id',
    component: ScholarshipDetailComponent,
    canActivate: [authGuard]
  }

];