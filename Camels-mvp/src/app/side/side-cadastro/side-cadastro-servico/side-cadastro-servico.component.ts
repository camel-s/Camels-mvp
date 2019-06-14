import { Component, OnInit } from '@angular/core';
import { Fonts } from 'src/assets/fonts/fonts';
import { ServicoService } from 'src/app/services/servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-cadastro-servico',
  templateUrl: './side-cadastro-servico.component.html',
  styleUrls: ['./side-cadastro-servico.component.css']
})
export class SideCadastroServicoComponent implements OnInit {

  private fonts: string

  constructor(private servicoService: ServicoService, private router: Router) {
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
  }

  submit(form) {
    this.servicoService.addServico(form.value)
    .then(
      (resposta) => {
        this.router.navigate(['/side/listagem/servico'])
      }
    )
  }
}
