import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from 'src/app/models/oferta.model';
import { OfertaService } from 'src/app/services/oferta.service';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';
import { SessaoService } from 'src/app/services/sessao.service';
import { OfertaDB } from 'src/app/models/oferta_db.model';


@Component({
  selector: 'app-side-editar-oferta',
  templateUrl: './side-editar-oferta.component.html',
  styleUrls: ['./side-editar-oferta.component.css']
})
export class SideEditarOfertaComponent implements OnInit {

  public oferta: Oferta
  public servicos: Servico[]

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertaService,
              private servicoService: ServicoService,
              private sessaoService: SessaoService,
              private router: Router) {
      this.oferta = new Oferta([undefined,undefined,undefined],[undefined,undefined])
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.ofertaService.getOfertas(undefined,params.get('id'))
        .then(
          (ofertadb: OfertaDB[]) => {
              this.ofertaService.toOferta(ofertadb[0]).then(
                oferta => {
                  this.oferta = oferta
                  this.servicoService.getServicos().then(
                    servico => {

                    }
                  )
                }
              )
          }
        )
      }
    )
  }

  public submit(form){
    this.ofertaService.updateOferta(form.value, this.oferta.id)
    .then(
      (resposta) => {
        this.router.navigate(['/side/listagem/oferta'])
      }
    )
  }

}
