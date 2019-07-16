import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoService } from 'src/app/services/servico.service';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-side-editar-servico',
  templateUrl: './side-editar-servico.component.html',
  styleUrls: ['./side-editar-servico.component.css']
})
export class SideEditarServicoComponent implements OnInit {

  public servico: Servico

  constructor(private route: ActivatedRoute, 
              private servicoService: ServicoService, 
              private sessaoService: SessaoService,
              private router: Router) {
    this.servico = {
      id: null,
      titulo: '',
      descricao: '',
      tipo: 1,
      preco: null,
      data: null,
      usuario: null
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.servicoService.getServicos(this.sessaoService.getUsuario().id,params.get('id')).then(
          (resposta:any) => {
            this.servico = resposta[0]
          }
        )
      }
    )
  }

  public submit(form){
    this.servicoService.updateServico(form.value, this.servico.id)
    .then(
      (resposta) =>{
        this.router.navigate(['/side/listagem/servico'])
      }
    )
  }

}
