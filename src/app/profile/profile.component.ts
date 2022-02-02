import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token : string | undefined;

  constructor(private route: ActivatedRoute,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.route.queryParams.
    subscribe(params => {
      this.tokenService.setToken(params['token']);
      console.log("My token " + this.tokenService.getToken());
    });
  }

  getToken() {
    return this.tokenService.getToken();
  }

}
