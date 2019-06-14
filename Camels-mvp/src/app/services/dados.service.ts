import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  public get(params){
    return this.http.get(this.url(params))
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public put(params: any) {

  }

  public delete(params) {
    return this.http.delete(this.url(params))
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public post(params) {
    return this.http.delete(this.url(params))
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public params(url: string, id?: number, values?:any, classe?: string){
    let params = {
      url: url,
      id:  ''
    }
    console.log(params)
    return params
  }

  private url(params): string{
    return URL_API + params.url + params.id
  }


}
