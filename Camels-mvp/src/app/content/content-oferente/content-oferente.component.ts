import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-content-oferente',
  templateUrl: './content-oferente.component.html',
  styleUrls: ['./content-oferente.component.css']
})
export class ContentOferenteComponent implements OnInit {

  constructor(private sessaoService: SessaoService) { }

  ngOnInit() {
    this.sessaoService.setAtuacao(false)
  }

}
