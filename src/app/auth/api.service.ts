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
  //private endPoint:string = "https://reqres.in/api/";
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());


  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router ) { 
  }
  /**
   * 
   * @param formData as the login form data
   */
  login(formData:any) {
    this.cookieService.set("currentUser", formData.email);
    this.loginStatus.next(true);
    return 200;
  }
  
  /**
   * 
   * @param formData as the login form data
   */
  signup(formData:any) {
    return 200;
  }
  /**
   * 
   * @param error error 
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  };

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
