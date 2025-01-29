import { Component, OnInit } from '@angular/core';
import { LoginRegisterComponent } from "../login-register/login-register.component";
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [LoginRegisterComponent, NavbarComponent]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
