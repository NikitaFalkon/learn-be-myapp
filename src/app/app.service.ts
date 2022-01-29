import { Injectable } from '@angular/core';
import {IUser} from "./user/iuser";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Token} from "./user/token";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  error: string ="";
   login(data: {username: string; password: string}): Observable<Token> {
     return this.http
       .post<Token>(`http://localhost:3000/auth/login`, data).pipe(
         catchError(this.handleError<Token>("Error auth"))
       )
   }

  private handleError<Token>(operation = 'operation', result?: Token) {
    return (error: any): Observable<Token> => {
      console.error(error);
      console.log(operation);
      error = operation;

      return of(result as Token);
    }
  }

  constructor(private http: HttpClient) { }
}
