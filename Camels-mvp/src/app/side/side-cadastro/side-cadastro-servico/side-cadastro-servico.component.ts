import { Component, OnInit } from '@angular/core';
import { Fonts } from 'src/assets/fonts/fonts';

@Component({
  selector: 'app-side-cadastro-servico',
  templateUrl: './side-cadastro-servico.component.html',
  styleUrls: ['./side-cadastro-servico.component.css']
})
export class SideCadastroServicoComponent implements OnInit {

  private operacao: string
  private titulo: string
  private descricao: string
  private preco: string
  private fonts: string

  constructor() {
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value)
    setTimeout(() => {
      window.location.assign('/side/listagem/servico')
    }, 2000);
  }
}
