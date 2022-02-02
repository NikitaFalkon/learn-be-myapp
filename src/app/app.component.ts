import {Component} from '@angular/core';
import {IUser} from "./user/iuser";
import {AppService} from "./service/app.service";
import {TokenService} from "./service/token.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  token : string | undefined;
  user: IUser = new IUser('', '');

  login(data: {username: string; password: string}) {
    return this.appService.login(data).subscribe(
      x => {this.token = x?.access_token;
        this.redirect()}
    );
  }

  redirect() {
    if(this.getError().length > 0) return;

    this.appService.navigate(['/login'], this.token);
  }

  getToken() {
    return this.tokenService.getToken();
  }

  constructor(private appService: AppService, private tokenService: TokenService){}

  getError() {
    return this.appService.error;
  }
}
