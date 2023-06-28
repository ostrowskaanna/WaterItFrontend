import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = environment.apiUrl + "auth";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any;
  badPassword: boolean = false;

  constructor(private http: HttpClient, public router: Router) { }

  // Sign-up
  register(registerDTO: any){
    console.log(registerDTO);
    this.http.post<any>(`${this.endpoint}/register`, registerDTO).subscribe((res: any) => {
      console.log("1");
      if(res){
        console.log(2);
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this.badPassword = false;
        this.router.navigate(["/management"]);
        localStorage.setItem('username', registerDTO.username);
      }
    })
  }
  // Sign-in
  login(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        if(res){
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this.badPassword = false;
          this.router.navigate(["/management"]);
          localStorage.setItem('username', user.username);
        }
          else{
            this.badPassword = true;
          }
      });
  }
  getToken() {
    return localStorage.getItem('refreshToken');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('accessToken');
    let removeRefreshToken = localStorage.removeItem('refreshToken');
    let removeUsername = localStorage.removeItem('username');
    let removeId = localStorage.removeItem('fieldId');
    if (removeToken == null && removeRefreshToken == null && removeUsername == null && removeId == null) {
      this.router.navigate(['login']);
    }
  }
  
}
