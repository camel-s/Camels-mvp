import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-side-perfil',
  templateUrl: './side-perfil.component.html',
  styleUrls: ['./side-perfil.component.css']
})
export class SidePerfilComponent implements OnInit {

  constructor(private sessaoService: SessaoService) { }

  ngOnInit() {
  }

  public sair(){
    this.sessaoService.logout()
  }

}
