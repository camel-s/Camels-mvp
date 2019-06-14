import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ServicoService } from 'src/app/services/servico.service';
import { resolve } from 'q';

@Component({
  selector: 'app-side-listagem-servico',
  templateUrl: './side-listagem-servico.component.html',
  styleUrls: ['./side-listagem-servico.component.css'],
  providers: [ ServicoService ]
})
export class SideListagemServicoComponent implements OnInit {

  public servicos: Servico[]

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.servicoService.getServicos()
    .then(( servicos: Servico[]) => {
      resolve( this.servicos = servicos)
    })
  }

  public editar(values: any) {
  }

  public excluir(id:number) {
    for (let index = 0; index < this.servicos.length; index++) {
      if (this.servicos[index].id == id) {
        this.servicos.splice(index, 1)
      }
    }
    this.servicoService.deleteServico(id)
  }

}
