import {Component} from '@angular/core';
import {IUser} from "./user/iuser";
import {AppService} from "./service/app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  token: string | undefined;
  mytoken: string = "";
  iuser: IUser | undefined;
  user: IUser = new IUser('', '');

  login(data: {username: string; password: string}) {
    this.appService.login(data).subscribe(
      x => {this.token = x?.access_token;
      console.log(x,this.token)}
    );
  }

  profile(token: string) {
    this.appService.profile(token).subscribe(
      x => {this.iuser = x;
      console.log(x)}
    )
  }

  constructor(private appService: AppService){ }

  getError() {
    return this.appService.error;
  }
}
