import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./features/landing-page/components/navbar/navbar.component"; 
import { CarouselComponent } from "./features/landing-page/components/carousel/carousel.component";
import { SearchBoxComponent } from './features/landing-page/components/search-box/search-box.component';
import { InfoComponent } from './features/landing-page/components/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, SearchBoxComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terra-nostra';
}
