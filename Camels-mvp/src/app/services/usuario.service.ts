import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Login } from '../models/login.model';
import { UsuarioDB } from '../models/usuario_db.model';
import { AvaliacaoService } from './avaliacao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = URL_API + '/usuarios'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }

  constructor(private http: HttpClient, private avaliacaoService: AvaliacaoService) { }

  public getUsuario(id?: number): Promise<Usuario> {
    let search: string = '';
    if (id) {
      search = '?id=' + id;
    }
    return this.http.get(this.url + search)
      .toPromise()
      .then((usuario_db: UsuarioDB) => {
            return this.toUsuario(usuario_db[0])
          }
        )
  }

  public updateUsuario(values, id) {
    return this.http.put(this.url + '/' + id, JSON.stringify(values), this.httpOptions)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public addUsuario(values) {
    let usuario = new Usuario(
      [values.nome, values.cpf],
      [new Login([values.email, values.senha]), null]
    )
    return this.http.post(this.url + '/', JSON.stringify(usuario), this.httpOptions)
      .toPromise()
      .then(
        (resposta: any) => { true }
      )
  }

  public logUsuario(login: Login): Promise<any>{
    let search = '?email='+login.email+'&senha='+login.senha
    return this.http.get(this.url + search)
    .toPromise()
    .then(
      (resposta: any) => {
        if(resposta.length !== 0){
         return resposta[0]
        }else{
         return false
        }
      }
    )
  }

  public toUsuario(usuario_db): Usuario {
    let avaliacao = this.avaliacaoService.getAvaliacao()
    return new Usuario(
      [usuario_db.nome, usuario_db.cpf],
      [usuario_db.login, avaliacao],
      usuario_db.id
    )
  }
}
