import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico.service';
import { Servico } from 'src/app/models/servico.model';
import { OfertaService } from 'src/app/services/oferta.service';
import { Fonts } from 'src/assets/fonts/fonts';

@Component({
  selector: 'app-side-cadastro-oferta',
  templateUrl: './side-cadastro-oferta.component.html',
  styleUrls: ['./side-cadastro-oferta.component.css']
})
export class SideCadastroOfertaComponent implements OnInit {

  public servicos: Servico[]
  private operacao: string
  private titulo: string
  private descricao: string
  private servico: string
  private fonts: string
  
  constructor(private servicoService: ServicoService, private ofertaService: OfertaService) { 
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
    this.servicoService.getServicos()
      .then(
        (servicos) => { this.servicos = servicos}
      )
  }

  submit(form) {
    this.ofertaService.addOferta(form.value)
  }

}
