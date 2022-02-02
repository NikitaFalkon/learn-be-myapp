import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.
    subscribe(params => {
      this.tokenService.setToken(params['token']);
      console.log("My token " + this.tokenService.getToken());
    });
  }

  back() {
    this.tokenService.setToken('');
    this.router.navigate(['/startbar']);
  }

  getToken() {
    return this.tokenService.getToken();
  }
}
