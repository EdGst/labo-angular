import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Token} from "../../shared/models/token";
import {Login} from "../../shared/models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData: Login = {};
  constructor(private authService: AuthenticationService) {
  }

  onLogin(): void {
    this.authService.login(this.loginData).subscribe(
      () => {

      },
      (error) => {

      }
    );
  }

}
