import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class SessaoService {
   
  private usuario: any
  private status: boolean
  private atuacao: boolean

  constructor(private usuarioService: UsuarioService) { 
    this.status = true
    this.atuacao = true
  }

  public login(login): Promise<boolean>{
    return this.usuarioService.logUsuario(login).then(
      (resposta: any) => {
        if(resposta){
          this.status = true
          this.usuario = resposta
          return true
        }else{
          return false
        }
      }
    )
  }
  public logout(){

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
    return true
  }

}
