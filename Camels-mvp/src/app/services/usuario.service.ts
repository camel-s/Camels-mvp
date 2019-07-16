import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Login } from '../models/login.model';

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

  constructor(private http: HttpClient) { }

  public getUsuario(id?: any): Promise<Usuario[]> {
    let search: string = '';
    if (id) {
      search = '?id=' + id;
    }
    return this.http.get(this.url + search)
      .toPromise()
      .then((resposta: Usuario[]) => resposta)
  }

  public updateUsuario(values, id) {
    return this.http.put(this.url + '/' + id, JSON.stringify(values), this.httpOptions)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public addUsuario(values) {
    let usuario = {
      id: null,
      nome: values.nome,
      cpf: values.cpfs,
      email: values.email,
      senha: values.senha,
      avaliacoes: null
    }

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
}
