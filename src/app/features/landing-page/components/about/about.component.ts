import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({

    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [RouterModule]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
