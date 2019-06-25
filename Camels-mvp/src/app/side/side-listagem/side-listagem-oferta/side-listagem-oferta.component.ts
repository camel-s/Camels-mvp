import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';
import { resolve } from 'q';

@Component({
  selector: 'app-side-listagem-oferta',
  templateUrl: './side-listagem-oferta.component.html',
  styleUrls: ['./side-listagem-oferta.component.css'],
  providers: [ OfertaService ]
})

export class SideListagemOfertaComponent implements OnInit {
  
  public ofertas: Oferta[]
  public usuario: boolean = false

  constructor(private ofertaService: OfertaService, private servicoService: ServicoService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
    .then( 
          ( ofertas ) => {  
            this.ofertas = ofertas
            ofertas.forEach((el, index) => {
              this.servicoService.getServicos(el.servicos[0]).then(
                (servico) => { 
                   let oferta = this.ofertas[index-1]
                   oferta.servicos = servico 
                }
                )
              index++
            })
          }
    )
    .catch(
      ( param: any ) => { console.log(param) } 
    )
  }

  public excluir(id:number){
    for (let index = 0; index < this.ofertas.length; index++) {
      if(this.ofertas[index].id == id){
        this.ofertas.splice(index, 1)
      }
    }
    this.ofertaService.deleteOferta(id)
  }

}
