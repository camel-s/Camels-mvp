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

  public getServicos(id?: number): Promise<Servico[]> {
    let search:string = '';
    if(id){
      search = '?id='+id;
    }
    return this.http.get(URL_API + '/servicos'+search)
      .toPromise()
      .then((resposta: Servico[]) => resposta)
  }

  public deleteServico(id) {
    return this.http.delete(URL_API + '/servicos/' + id)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public addServico(values) {
    console.log(values)
  }

}
