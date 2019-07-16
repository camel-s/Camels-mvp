import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from './sessao.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  public link: string
  public root: string

  constructor(private router: Router, private sessaoService: SessaoService) { } 

  url(){
    return this.router.url
  }

  navigate(){
    this.router.navigate([this.link])
  }

  onActivate(){
    let url = this.router.url

    if(
      url === '/side/cadastro/usuario' ||
      url === '/side/login' ||
      url === '/side/listagem/servico' 
      ){
      this.link = '/content/oferente'
      this.root = 'content'
    }
    else if(
      url === '/side/cadastro/oferta' ||
      url.slice(0, url.lastIndexOf('/')) === '/side/editar/oferta' ||
      url.slice(0, url.lastIndexOf('/')) === '/side/oferta'
    ){
      this.link = '/side/listagem/oferta'
      this.root = 'side'
    }
    else if(
      url === '/side/cadastro/servico' ||
      url.slice(0, url.lastIndexOf('/')) === '/side/editar/servico'
    ){
      this.link = '/side/listagem/servico'
      this.root = 'side'
    }else if(
      url === '/side/listagem/oferta'
    ){
      if(this.sessaoService.getAtuacao()){
        this.link = '/content/contratante'
      }else{
        this.link = '/content/oferente'
      }
      this.root = 'content'
    }
  }
}
