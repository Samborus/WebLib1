import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWTResponse } from '.././Model/JWTResponse';

@Injectable()
export class AuthService {

  private _url = 'http://localhost:49495/api/Users/authenticate';

  constructor(
              public jwtHelper: JwtHelperService,
              private http: HttpClient
            ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public logOut(): void {
    localStorage.removeItem('access_token');
  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public Authenticate(login: string, pass: string): any {

    return this.http.post<JWTResponse>(this._url,  JSON.stringify ({ Username : login, Password: pass }),
     { headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
