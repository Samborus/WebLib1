import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {  AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, public jwtHelper: JwtHelperService) { }

  public login;
  public pass;
  public isLogged = false;
  public loginResult = '';
  @Output() LogonEvent = new EventEmitter();

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
  }

  TryLogIn() {
    this.authService.Authenticate(this.login, this.pass).toPromise().then(
      val => {
        console.log('@ POST call successful value returned in body: ', val);
        let tok = '';
        if (val.result != null) {
          tok = this.jwtHelper.decodeToken(val.result);
          localStorage.setItem('access_token', val.result);
          this.isLogged = true;
          this.router.navigate(['player']);
        }
      });
    }

  TryLogout() {
    this.authService.logOut();
    this.isLogged = false;
    // this.LogonEvent.emit(this.isLogged);
    console.log(this.isLogged = false);
    this.router.navigate(['index']);
  }
}
