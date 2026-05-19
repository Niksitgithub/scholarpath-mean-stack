import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile.component';
import { ScholarshipDetailComponent } from './scholarship-detail.component';

export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
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
    component: ProfileComponent
  },

  {
    path: 'scholarship/:id',
    component: ScholarshipDetailComponent
  }

];