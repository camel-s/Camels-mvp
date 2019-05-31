import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Fonts } from 'src/assets/fonts/fonts';

@Component({
  selector: 'app-side-login',
  templateUrl: './side-login.component.html',
  styleUrls: ['./side-login.component.css']
})
export class SideLoginComponent implements OnInit {

  private fonts: string
  private loginService: LoginService

  constructor() {
    this.fonts = Fonts.titleSizeAdjust($(window).width())    
  }

  ngOnInit() {
  }

}
