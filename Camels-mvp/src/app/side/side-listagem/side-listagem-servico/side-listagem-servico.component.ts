import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';
import { SessaoService } from 'src/app/services/sessao.service';
import { ServicoDB } from 'src/app/models/servico_db.model';
@Component({
  selector: 'app-side-listagem-servico',
  templateUrl: './side-listagem-servico.component.html',
  styleUrls: ['./side-listagem-servico.component.css'],
  providers: [ ServicoService ]
})
export class SideListagemServicoComponent implements OnInit {

  public servicos: Servico[] = []

  constructor(private servicoService: ServicoService, private sessaoService: SessaoService, private pesquisaService: PesquisaService) {}

  ngOnInit() {
    this.servicoService.getServicos(this.sessaoService.getUsuario().id)
    .then(( servicos_db: ServicoDB[]) => {
        servicos_db.forEach(element => {
          this.servicoService.toServico(element).then(
            (servico: Servico) =>{
              this.servicos.push(servico)
            }
          )
        })
    })
    this.pesquisaService.pesquisa(this)
  }

  public excluir(id:number) {
    for (let index = 0; index < this.servicos.length; index++) {
      if (this.servicos[index].id == id) {
        this.servicos.splice(index, 1)
      }
    }
    this.servicoService.deleteServico(id)
  }

  public pesquisa() {
    this.servicos= this.pesquisaService.filtro(this.servicos)
  }

}
