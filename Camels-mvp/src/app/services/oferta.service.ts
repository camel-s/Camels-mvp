import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs'

import { URL_API } from '../app.api';
import { ServicoService } from './servico.service';
import { OfertaDB } from '../models/oferta_db.model';
import { Oferta } from '../models/oferta.model';
import { Servico } from '../models/servico.model';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/usuario.model';
import { SessaoService } from './sessao.service';
import { ServicoDB } from '../models/servico_db.model';


@Injectable({
  providedIn: 'root'
})

export class OfertaService {

  private url: string = URL_API+'/ofertas'
  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http: HttpClient,
              private servicoService: ServicoService,
              private usuarioService: UsuarioService,
              private sessaoService: SessaoService) {}

  public getOfertas(usuario?:any, id?:any, titulo?:any){
    let search: string = '';
    if(usuario){
      if(!usuario[0]){
        search = '?usuario=' + usuario[1]
      }else if(usuario[0]){
        search = '?usuario_ne=' + usuario[1]
      }
    }
    if (id) {
      search += '?id=' + id;
    }
    if (titulo){
      search += '?titulo_like="' + titulo + '"'
    }
    return this.http.get(this.url+search)
      .toPromise()
      .then((ofertasdb: OfertaDB[]) => {
        return ofertasdb
      })
  }

  public updateOferta(values, id) {
    return this.http.put(this.url + '/' + id, JSON.stringify(values), this.httpOptions)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public deleteOferta(id: number) {
    return this.http.delete(this.url + '/' + id)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public addOferta(values: any){
    let oferta = new OfertaDB(
      [values.titulo, values.descricao, new Date(), values.servico, this.sessaoService.getUsuario().id]
    )

    return this.http.post(this.url+'/', JSON.stringify(oferta), this.httpOptions)
      .toPromise()
      .then(
        (resposta:any) =>{ console.log(resposta)}
      )
  }

  public toOferta(oferta_db): Promise<Oferta> {
    return this.usuarioService.getUsuario(oferta_db.usuario).then(
      (usuario: Usuario) => {
        return this.servicoService.getServico(oferta_db.usuario, oferta_db.servico).then(
          (servico: Servico) => {
            return new Oferta(
              [oferta_db.titulo, oferta_db.descricao, oferta_db.data],
              [servico, usuario],
              oferta_db.id
              )
          }
        )
      }
    )
  }

}
