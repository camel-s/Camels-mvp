import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta.model';
import { Servico } from 'src/app/models/servico.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';
import { ServicoService } from 'src/app/services/servico.service';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-side-oferta',
  templateUrl: './side-oferta.component.html',
  styleUrls: ['./side-oferta.component.css']
})
export class SideOfertaComponent implements OnInit {

  public oferta: Oferta
  public usuario
  public servicos: Servico[]

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertaService, 
              private servicoService: ServicoService,
              private sessaoService: SessaoService, 
              private router: Router) {
    this.oferta = {
      id: null,
      titulo: '',
      descricao: '',
      servicos: null,
      data: null,
      usuario: null
    }
    this.usuario = {
      id: null,
      nome: ''
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.ofertaService.getOfertas(params.get('id'))
          .then(
            (resposta) => {
              this.oferta = resposta[0]
              this.servicoService.getServicos(this.oferta.servicos).then(
                (resposta) => {
                  this.servicos = resposta
                  this.sessaoService.getUsuario().then(
                    (resposta) => {
                      this.usuario = resposta[0]
                    }
                  )
                }
              )
            }
          )
      }
    )
  }

}
