import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs'

import { Oferta } from '../models/oferta.model';
import { URL_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})

export class OfertaService {

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]>{
    return this.http.get(URL_API+'/ofertas')
      .toPromise()
      .then((resposta: any) => resposta)
  }
  
}
