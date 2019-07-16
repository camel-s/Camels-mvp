import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-side-cadastro',
  templateUrl: './side-cadastro.component.html',
  styleUrls: ['./side-cadastro.component.css']
})
export class SideCadastroComponent implements OnInit {

  constructor(private routes: RoutesService) { }

  ngOnInit() {
    
  }

  

}
