import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Notificacao } from '../models/notificacao.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  private url: string = URL_API + '/notificacoes'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getNotificacoes(usuario?: any, id?: any): Promise<any> {
    let search: string = '';
    if (usuario) {
      search = '?destinatario=' + usuario
    }
    if (id) {
      if(usuario){
        search += '&id=' + id;
      }else{
        search = '?id=' + id;
      }
    }
    return this.http.get(this.url + search)
      .toPromise()
      .then((resposta: Notificacao[]) => resposta)
  }

  public updateNotificacao(values, id) {
    return this.http.put(this.url + '/' + id, JSON.stringify(values), this.httpOptions)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public deleteNotificacao(id: any) {
    return this.http.delete(this.url + '/' + id).toPromise().then((resposta: any) => resposta)
  }

  public addNotificacao(values) {
    let servico = new Notificacao(
      [values.descricao, values.tipo, new Date(), values.remetente, values.destinatario, values.oferta],
    )

    return this.http.post(this.url + '/', JSON.stringify(servico), this.httpOptions)
      .toPromise()
      .then(
        (resposta: any) => { true }
      )
  }

}
