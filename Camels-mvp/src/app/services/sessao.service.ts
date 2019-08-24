import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
import { NotificacaoService } from './notificacao.service';
import { Notificacao } from '../models/notificacao.model';


@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private usuario: any
  private status: boolean
  private atuacao: boolean
  private token: string
  private notificacao: Notificacao

  constructor(private usuarioService: UsuarioService,
              private notificacaoService: NotificacaoService,
              private router:Router) {
    this.token = JSON.parse(localStorage.getItem('token'))
    if(this.token){
      this.usuario = this.token
      this.status = true
    }else{
      this.status = false
    }
    this.atuacao = true
  }

  public login(login): Promise<boolean>{
    return this.usuarioService.logUsuario(login).then(
      (resposta: any) => {
        if(resposta){
          this.status = true
          this.usuario = resposta
          this.atuacao = true
          localStorage.setItem('token', JSON.stringify(this.usuario))
          return true
        }else{
          return false
        }
      }
    )
  }

  public logout(){
    localStorage.clear()
    this.status = false
    this.token = null
    this.router.navigate(['/'])
  }

  public notificacoes(): Promise<any[]>{
    return this.notificacaoService.getNotificacoes(this.usuario.id).then(
      notificacoes =>{
        return notificacoes
      }
    )
  }

  public alterarAtuacao(){
    if(this.atuacao){
      this.atuacao = false
    }else{
      this.atuacao = true
    }
  }
  public setAtuacao(atuacao){
    this.atuacao = atuacao
  }
  public getAtuacao(){
    return this.atuacao
  }

  public getUsuario(){
    return this.usuario
  }

  public getSessao(){
    return this.status
  }

}
