import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private query: string

  constructor() { }

  public getQuery(){
    return this.query
  }

  public setQuery(query){
    this.query = query
  }

  public pesquisa(object){
    $('#listagem-pesquisa').on('keyup', function () {
      object.pesquisa()
    })
  }

  public filtro(objects): any[]{
    let listagem: any[] = []
    objects.forEach(element => {
      let titulo = element.titulo.toLowerCase()
      if (listagem == null) {
        if (titulo.substr(0, this.query.length) == this.query) {
          listagem.push(element)
        }
      } else {
        if (titulo.substr(0, this.query.length) == this.query) {
          listagem.push(element)
        }
      }
    });
    return listagem
  }
}
