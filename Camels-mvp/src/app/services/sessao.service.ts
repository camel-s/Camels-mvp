import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SessaoService {
   
  private usuario: any
  private status: boolean
  private atuacao: boolean
  private token: string

  constructor(private usuarioService: UsuarioService, private router:Router) { 
    this.token = localStorage.getItem('token')
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
