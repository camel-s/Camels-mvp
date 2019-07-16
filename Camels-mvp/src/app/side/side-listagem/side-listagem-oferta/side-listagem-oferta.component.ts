import { Component, OnInit, Input, HostListener } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';
import { resolve } from 'q';
import { SessaoService } from 'src/app/services/sessao.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';
import { isNumber, isString } from 'util';

@Component({
  selector: 'app-side-listagem-oferta',
  templateUrl: './side-listagem-oferta.component.html',
  styleUrls: ['./side-listagem-oferta.component.css'],
  providers: [ OfertaService ]
})

export class SideListagemOfertaComponent implements OnInit {
  
  public ofertas: Oferta[]
  public listagemOfertas: any[] 
  public tipoUsuario: boolean


  constructor(private ofertaService: OfertaService,
              private servicoService: ServicoService, 
              private sessaoService: SessaoService,
              private pesquisaService: PesquisaService) {  
              }

  ngOnInit() {
    let usuario = false 
    if(this.tipoUsuario)
      usuario = this.sessaoService.getUsuario().id
    
    this.tipoUsuario = this.sessaoService.getAtuacao()
    this.ofertaService.getOfertas(usuario)
    .then( 
          ( ofertas ) => { 
            console.log(ofertas) 
            this.ofertas = ofertas
            ofertas.forEach((el, index) => {
              this.servicoService.getServicos(el.usuario,el.servicos[0]).then(
                (servico) => { 
                   let oferta = this.ofertas[index-1]
                   oferta.servicos = servico 
                }
                )
              index++
            })
            this.listagemOfertas = this.ofertas
          }
    )
    .catch(
      ( param: any ) => { console.log(param) } 
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
    this.listagemOfertas = this.pesquisaService.filtro(this.ofertas)
  }

}
