import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico.service';
import { Servico } from 'src/app/models/servico.model';
import { OfertaService } from 'src/app/services/oferta.service';
import { Fonts } from 'src/assets/fonts/fonts';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/services/sessao.service';
import { ServicoDB } from 'src/app/models/servico_db.model';

@Component({
  selector: 'app-side-cadastro-oferta',
  templateUrl: './side-cadastro-oferta.component.html',
  styleUrls: ['./side-cadastro-oferta.component.css']
})
export class SideCadastroOfertaComponent implements OnInit {

  public servicos: ServicoDB[]
  private fonts: string
  constructor(private servicoService: ServicoService,
              private ofertaService: OfertaService,
              private sessaoService: SessaoService,
              private router: Router) {
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
    this.servicoService.getServicos(this.sessaoService.getUsuario().id)
      .then(
        (servicos_db) => { this.servicos = servicos_db}
      )
      .catch(
        (error) => console.error(error)
      )
  }

  submit(form) {
    this.ofertaService.addOferta(form.value)
      .then(
        (resposta) => {
          this.router.navigate(['/side/listagem/oferta'])
        }
      )
  }

}
