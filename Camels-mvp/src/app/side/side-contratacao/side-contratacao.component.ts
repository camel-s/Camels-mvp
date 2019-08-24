import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/services/sessao.service';
import { Notificacao } from 'src/app/models/notificacao.model';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-side-contratacao',
  templateUrl: './side-contratacao.component.html',
  styleUrls: ['./side-contratacao.component.css']
})
export class SideContratacaoComponent implements OnInit {

  private notificacoes: Notificacao[]

  constructor(private router: Router, private sessaoService: SessaoService, private notificacaoService: NotificacaoService) { 
    this.sessaoService.notificacoes().then(
      (notificacoes) => {
        this.notificacoes = notificacoes
      }
    )
  }

  ngOnInit() {
  }

  public recusar(){
    this.notificacaoService.deleteNotificacao(this.notificacoes[0].id)
    this.router.navigate(['/'])
  }

}
