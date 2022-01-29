import { Component } from '@angular/core';
import {IUser} from "./user/iuser";
import {AppService} from "./app.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  token: Observable<IUser> | undefined;

  login(data: {username: string; password: string}) {
    this.token = this.appService.login(data);
  }

  constructor(private appService: AppService){ }
  user: IUser = new IUser('', '');
}
