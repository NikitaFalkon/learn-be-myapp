import { Injectable } from '@angular/core';
import {IUser} from "./user/iuser";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
   login(data: {username: string; password: string}): Observable<IUser> {
     return this.http
       .post<IUser>(`http://localhost:3000/auth/login`, data);
   }

  constructor(private http: HttpClient) { }
}
