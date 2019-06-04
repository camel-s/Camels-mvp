import { Injectable } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Injectable({
  providedIn: 'root'
})

export class OfertaService {

  public ofertas: Oferta[] = [
    {
      id: 1,
      titulo: 'oferta top 1',
      descricao: 'oferta top descricao 1',
      anexo: '',
      servicos: null,
      idContratante: 0,
      idOferente: 1
    },
    {
      id: 2,
      titulo: 'oferta top 2',
      descricao: 'oferta top descricao 2',
      anexo: '',
      servicos: null,
      idContratante: 0,
      idOferente: 2
    },
    {
      id: 3,
      titulo: 'oferta top 3',
      descricao: 'oferta top descricao 3',
      anexo: '',
      servicos: null,
      idContratante: 0,
      idOferente: 3
    }
    , {
      id: 4,
      titulo: 'oferta top 4',
      descricao: 'oferta top descricao 4',
      anexo: '',
      servicos: null,
      idContratante: 0,
      idOferente: 4
    }
  ]

  public getOfertas(): Promise<Oferta[]>{
    return new Promise((resolve, reject) => {
      resolve( this.ofertas )
      reject( { codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' })
    })
  }

  constructor() {}
}
