import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.api';

import 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  constructor(private http: HttpClient) {}

  public servicos: Servico[]

  public getServicos(): Promise<Servico[]> {
    return this.http.get(URL_API + '/servicos')
      .toPromise()
      .then((resposta: any) => resposta)
  }


}
