import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  mode: 'login' | 'register' = 'login';

  setMode(mode: 'login' | 'register') {
    this.mode = mode;
  }
}