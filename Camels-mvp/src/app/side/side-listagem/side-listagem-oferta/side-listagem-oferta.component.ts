import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import { SessaoService } from 'src/app/services/sessao.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';
import { OfertaDB } from 'src/app/models/oferta_db.model';
@Component({
  selector: 'app-side-listagem-oferta',
  templateUrl: './side-listagem-oferta.component.html',
  styleUrls: ['./side-listagem-oferta.component.css'],
  providers: [ OfertaService ]
})

export class SideListagemOfertaComponent implements OnInit {

  public ofertas: Oferta[] = []
  public tipoUsuario: boolean


  constructor(private ofertaService: OfertaService,
              private sessaoService: SessaoService,
              private pesquisaService: PesquisaService) {
              }

  ngOnInit() {
    this.tipoUsuario = this.sessaoService.getAtuacao()
    let usuario = [this.tipoUsuario, this.sessaoService.getUsuario().id]

    this.ofertaService.getOfertas(usuario)
    .then(
          ( ofertasdb: OfertaDB[] ) => {
              ofertasdb.forEach(element => {
                this.ofertaService.toOferta(element).then(
                  oferta => {
                    this.ofertas.push(oferta)
                  }
                )
              });
          }
    )
    this.pesquisaService.pesquisa(this)
  }

  public excluir(id:number){
    for (let index = 0; index < this.ofertas.length; index++) {
      if(this.ofertas[index].id == id){
        this.ofertas.splice(index, 1)
      }
    }
    this.ofertaService.deleteOferta(id)
  }

  public pesquisa(){
    this.ofertas = this.pesquisaService.filtro(this.ofertas)
  }

}
