import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-side-editar',
  templateUrl: './side-editar.component.html',
  styleUrls: ['./side-editar.component.css']
})
export class SideEditarComponent implements OnInit {

  constructor(private routes: RoutesService) { }

  ngOnInit() {
  }

}
