import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta.model';
import { Servico } from 'src/app/models/servico.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';
import { ServicoService } from 'src/app/services/servico.service';
import { SessaoService } from 'src/app/services/sessao.service';
import { OfertaDB } from 'src/app/models/oferta_db.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { Notificacao } from 'src/app/models/notificacao.model';

@Component({
  selector: 'app-side-oferta',
  templateUrl: './side-oferta.component.html',
  styleUrls: ['./side-oferta.component.css']
})
export class SideOfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute,
              private ofertaService: OfertaService,
              private sessaoService: SessaoService,
              private notificacaoService: NotificacaoService,
              private router: Router) {
    this.oferta = new Oferta([], [new Servico([],[]), new Usuario([],[])])
    }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.ofertaService.getOfertas(undefined, params.get('id'))
          .then(
            (oferta_db: OfertaDB[]) => {
              this.ofertaService.toOferta(oferta_db[0]).then(
                oferta => {
                  this.oferta = oferta
                }
              )
            }
          )
      }
    )
  }

  contratar(){
    let notificacao = new Notificacao(
      [undefined, 1, new Date(), this.sessaoService.getUsuario().id, this.oferta.usuario.id, this.oferta.id]
    )
    this.notificacaoService.addNotificacao(notificacao)
  }

}
