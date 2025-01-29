import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/components/landing-page/landing-page.component';
import { AuthComponent } from './features/auth/components/auth/auth.component';
export const routes: Routes = [

  { path: '', component: LandingPageComponent}, // Página principal
  {path: 'login', component: AuthComponent}, // Página de login

];
