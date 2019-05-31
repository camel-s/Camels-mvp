import { Component, OnInit } from '@angular/core';
import { Fonts } from 'src/assets/fonts/fonts';

@Component({
  selector: 'app-side-cadastro-usuario',
  templateUrl: './side-cadastro-usuario.component.html',
  styleUrls: ['./side-cadastro-usuario.component.css']
})
export class SideCadastroUsuarioComponent implements OnInit {

  private fonts: string
  
  constructor() {
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
  }

}
