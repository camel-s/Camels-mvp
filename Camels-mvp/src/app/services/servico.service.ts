import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})

export class ServicoService {

  public servicos: Servico[] = [
    {
      id: 1,
      titulo: 'servico top 1',
      descricao: 'servico top descricao 1',
      areaAtuacao: null,
      preco: 20,
      anexo: ''
    },
    {
      id: 2,
      titulo: 'servico top 2',
      descricao: 'servico top descricao 2',
      areaAtuacao: null,
      preco: 20,
      anexo: ''
    },
    {
      id: 3,
      titulo: 'servico top 3',
      descricao: 'servico top descricao 3',
      areaAtuacao: null,
      preco: 20,
      anexo: ''
    }
    , {
      id: 4,
      titulo: 'servico top 4',
      descricao: 'servico top descricao 4',
      areaAtuacao: null,
      preco: 20,
      anexo: ''
    }
  ]

  public getServicos(): Promise<Servico[]>{
    return new Promise((resolve,reject) => {
      resolve( this.servicos )
    })
  }

  constructor() {}

}
