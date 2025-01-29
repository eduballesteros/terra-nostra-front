import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { SearchBoxComponent } from '../search-box/search-box.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [RouterModule, NavbarComponent, CarouselComponent, SearchBoxComponent, InfoComponent]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
