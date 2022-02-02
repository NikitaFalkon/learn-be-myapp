import {Component} from '@angular/core';
import {AppService} from "./service/app.service";
import {TokenService} from "./service/token.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private appService: AppService, private tokenService: TokenService){}
}
