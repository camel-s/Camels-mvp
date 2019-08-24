import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/services/pesquisa.service';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-side-listagem',
  templateUrl: './side-listagem.component.html',
  styleUrls: ['./side-listagem.component.css']
})
export class SideListagemComponent implements OnInit {

  constructor(private routes: RoutesService,private pesquisaService: PesquisaService) { }

  ngOnInit() {

  }

  pesquisar(input){
    this.pesquisaService.setQuery(input.value)
  }

}
