import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';

@Component({
  selector: 'app-side-listagem-oferta',
  templateUrl: './side-listagem-oferta.component.html',
  styleUrls: ['./side-listagem-oferta.component.css'],
  providers: [ OfertaService ]
})

export class SideListagemOfertaComponent implements OnInit {
  
  public ofertas: Oferta[]

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
    .then(
      ( ofertas: Oferta[] ) => { this.ofertas = ofertas; }
    )
    .catch(
      ( param: any ) => { console.log(param) } 
    )
    console.log(this.ofertas)
  }

}
