import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent implements OnInit {

  private tipoUsuario: string = 'contratante'  
  private link: string = '/content/oferente'

  constructor() {
    
  }

  ngOnInit() {

  }

  alternarTipo(){
    if(this.tipoUsuario == 'contratante'){
      this.tipoUsuario = 'oferente'
      this.link = '/content/contratante'
    }else{
      this.tipoUsuario = 'contratante'
      this.link = '/content/oferente'
    }
  }  

}
