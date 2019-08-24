import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '../app.api';

import 'rxjs'
import { SessaoService } from './sessao.service';
import { ServicoDB } from '../models/servico_db.model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  private url: string = URL_API + '/servicos'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, 
    private sessaoService: SessaoService,
    private usuarioService: UsuarioService) {}

  public getServicos(usuario?:any, id?: any): Promise<ServicoDB[]> {
    let search:string = '';
    if(usuario){
      search = '?usuario='+usuario
    }
    if(id){
      if(usuario){
        search += '&id=' + id;
      }else{
        search = '?id=' + id;
      }
    }
    return this.http.get(this.url+search)
      .toPromise()
      .then((servico: ServicoDB[]) => servico)
  }

  public getServico(usuario: number, id: number): Promise<Servico>{
    return this.getServicos(usuario, id).then(
      (servicos_db: ServicoDB[]) => {
        return this.toServico(servicos_db[0]).then(
          (servico: Servico) => {
            return servico
          }
        )
      }
    )
  }

  public updateServico(values, id){
    return this.http.put(this.url + '/' + id, JSON.stringify(values), this.httpOptions)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public deleteServico(id:any){
    return this.http.delete(URL_API + '/servicos/' + id).toPromise().then((resposta: any) => resposta)
  }

  public addServico(values) {
    let servico = new ServicoDB(
      [values.titulo, values.descricao, values.tipo, values.preco, new Date(), this.sessaoService.getUsuario().id],
    )

    return this.http.post(this.url + '/', JSON.stringify(servico), this.httpOptions)
      .toPromise()
      .then(
        (resposta: any) => { true }
      )
  }

  public toServico(servico_db: ServicoDB): Promise<Servico> {
    return this.usuarioService.getUsuario(servico_db.usuario).then(
      usuario => {
        return new Servico([
          servico_db.titulo,
          servico_db.descricao,
          servico_db.tipo,
          servico_db.preco,
          servico_db.data
        ],[usuario])
      }
    )
  }

}
