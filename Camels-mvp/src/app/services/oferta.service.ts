import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs'

import { Oferta } from '../models/oferta.model';
import { URL_API } from '../app.api';
import { Servico } from '../models/servico.model';
import { ServicoService } from './servico.service';
import { resolve } from 'q';
import { TouchSequence } from 'selenium-webdriver';
import { Request } from 'selenium-webdriver/http';

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

  constructor(private http: HttpClient,private servicoService: ServicoService) {}

  public getOfertas(id?:any){
    let search: string = '';
    if (id) {
      search = '?id=' + id;
    }
    return this.http.get(this.url+search)
      .toPromise()
      .then((resposta: any) => resposta)
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
    console.log(values)
    let oferta = {
      id: null,
      titulo: values.titulo,
      descricao: values.descricao,
      servicos: [ values.servico ],
      usuario: 1 
    }

    return this.http.post(this.url+'/', JSON.stringify(oferta), this.httpOptions)
      .toPromise()
      .then(
        (resposta:any) =>{ console.log(resposta)}
      )
  }

}
