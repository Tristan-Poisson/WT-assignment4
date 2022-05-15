import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { CommonResponse } from "../common/common-response";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());
  serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router ) { 
  }

  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  /**
   * 
   * @param formData as the login form data
   */
  login(formData:any) {
    //var result = this.request('GET', `${this.serverUrl}/login`, formData);
    this.cookieService.set("currentUser", formData.email);
    this.loginStatus.next(true);
    return 200;
  }
  
  /**
   * 
   * @param formData as the login form data
   */
  signup(formData:any) {
    //var result = this.request('POST', `${this.serverUrl}/signup`, formData);
    return 200;
  }


  logout(){
    this.loginStatus.next(false);

    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

/**
*
* @returns {Observable<T>}
*/
 isLoggedIn() : Observable<boolean> {
  return this.loginStatus.asObservable();
 }
   /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return this.cookieService.check('currentUser');
  }
}
