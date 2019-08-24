import { Component, OnInit } from '@angular/core';
import { Fonts } from 'src/assets/fonts/fonts';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-side-cadastro-usuario',
  templateUrl: './side-cadastro-usuario.component.html',
  styleUrls: ['./side-cadastro-usuario.component.css']
})
export class SideCadastroUsuarioComponent implements OnInit {

  private fonts: string
  
  constructor(
    private usuarioService: UsuarioService,
    private sessaoService: SessaoService,
    private router: Router
              ) {
    this.fonts = Fonts.titleSizeAdjust($(window).width())
  }

  ngOnInit() {
  }

  submit(form) {
    this.usuarioService.addUsuario(form.value).then(
      (resposta) => {
        this.sessaoService.login({"email": form.value.email, "senha": form.value.senha}).then(
          (resposta) => {
            this.router.navigate(['/content/contratante'])
          }
        )
      }
    )
  }

}
