import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from 'src/app/models/oferta.model';
import { OfertaService } from 'src/app/services/oferta.service';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';


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
              private router: Router) {
    this.oferta = {
      id: null,
      titulo: '',
      descricao: '',
      servicos: null,
      data: null,
      usuario: null
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.ofertaService.getOfertas(params.get('id'))
        .then(
          (resposta) => {
            this.oferta = resposta[0]
            this.servicoService.getServicos().then(
              (resposta) =>{
                this.servicos = resposta
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
