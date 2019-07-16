import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  private tipoUsuario: string = 'contratante'  
  private link: string = '/content/oferente'

  constructor(private sessaoService: SessaoService) {
    if (window.location.pathname === '/content/oferente') {
      this.sessaoService.setAtuacao(false)
    } else if (window.location.pathname === '/content/contratante') {
      this.sessaoService.setAtuacao(true)
    }
    this.setTipo()
  }

  ngOnInit() {
  }

  public alternarTipo(){
    this.sessaoService.alterarAtuacao()
    this.setTipo()
  }

  public setTipo(){
    if (this.sessaoService.getAtuacao()) {
      this.tipoUsuario = 'contratante'
      this.link = '/content/oferente'
    } else {
      this.tipoUsuario = 'oferente'
      this.link = '/content/contratante'
    }
  }


}
