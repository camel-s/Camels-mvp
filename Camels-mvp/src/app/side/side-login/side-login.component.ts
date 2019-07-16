import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Fonts } from 'src/assets/fonts/fonts';
import { SessaoService } from 'src/app/services/sessao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-login',
  templateUrl: './side-login.component.html',
  styleUrls: ['./side-login.component.css']
})
export class SideLoginComponent implements OnInit {

  private fonts: string

  constructor(private sessaoService: SessaoService, private router: Router) {
    this.fonts = Fonts.titleSizeAdjust($(window).width())    
  }

  ngOnInit() {
  }

  public submit(login){
    this.sessaoService.login(login).then(
      (resposta: boolean) => {
        if(resposta){
          console.log(this.sessaoService.getSessao())
          this.router.navigate(['/'])
        }else{
          alert(1)
        }
      }
    )
  }

}
