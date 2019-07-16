import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '../app.api';

import 'rxjs'

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

  constructor(private http: HttpClient) {}

  public getServicos(id?: any): Promise<Servico[]> {
    let search:string = '';
    if(id){
      search = '?id='+id;
    }
    return this.http.get(this.url+search)
      .toPromise()
      .then((resposta: Servico[]) => resposta)
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
    let servico = {
      id: null,
      titulo: values.titulo,
      descricao: values.descricao,
      tipo: values.tipo,
      preco: values.preco,
      data: new Date(),
      usuario: 1
    }
    

    return this.http.post(this.url + '/', JSON.stringify(servico), this.httpOptions)
      .toPromise()
      .then(
        (resposta: any) => { true }
      )
  }

}
