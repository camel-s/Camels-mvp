import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-content-contratante',
  templateUrl: './content-contratante.component.html',
  styleUrls: ['./content-contratante.component.css']
})
export class ContentContratanteComponent implements OnInit {

  constructor(private sessaoService: SessaoService) { }

  ngOnInit() {
    this.sessaoService.setAtuacao(true)
  }

}
