import { Injectable } from '@angular/core';
import {IUser} from "../user/iuser";
import {HttpClient} from "@angular/common/http";
import { Observable, of, interval } from 'rxjs';
import {Token} from "../user/token";
import {catchError, delay, switchMap, tap} from "rxjs/operators";
;


@Injectable({
  providedIn: 'root'
})
export class AppService {
  error: string ="";
  token : string | undefined;

   login(data: {username: string; password: string}): Observable<Token> {
     this.error = "";
     return this.http
       .post<Token>(`http://localhost:3000/auth/login`, data).pipe(
         catchError(this.handleError<Token>("Invalid profile"))
       )
   }

  profile(token: string | undefined): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).pipe(
      catchError(this.handleError<IUser>("Invalid profile"))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation);
      this.error = operation;

      return of(result as T);
    }
  }

  constructor(private http: HttpClient) { }
}
