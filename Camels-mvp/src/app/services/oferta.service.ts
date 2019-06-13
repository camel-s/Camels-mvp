import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs'

import { Oferta } from '../models/oferta.model';
import { URL_API } from '../app.api';
import { Servico } from '../models/servico.model';
import { ServicoService } from './servico.service';
import { resolve } from 'q';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class OfertaService {

  constructor(private http: HttpClient,private servicoService: ServicoService) {}

  public getOfertas(id?:number){
    let search: string = '';
    if (id) {
      search = '?id=' + id;
    }
    return this.http.get(URL_API+'/ofertas'+search)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public deleteOferta(id){
    return this.http.delete(URL_API+'/ofertas/'+id)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public addOferta(values){
    console.log(values)
  }

}
