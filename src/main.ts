import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingPageComponent } from './app/features/landing-page/components/landing-page/landing-page.component';
import { AuthComponent } from './app/features/auth/components/auth/auth.component';

// Definición de rutas
const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Página de inicio o componente de navegación
  { path: 'login', component: AuthComponent },  // Ruta para login y registro
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Proveedor para las rutas
    RouterModule  // Importa RouterModule aquí también
  ]
});
