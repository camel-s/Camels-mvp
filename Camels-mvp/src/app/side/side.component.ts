import { Component, OnInit } from '@angular/core';

import 'rxjs'
import { SessaoService } from '../services/sessao.service';
import { RoutesService } from '../services/routes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  private display: number
  private classes: string 

  constructor(private routes: RoutesService, private sessaoService: SessaoService, private activatedRoute: ActivatedRoute) { 
    this.display = $(window).width();
    this.baseClasses()
    if(this.activatedRoute.component === SideComponent){
      this.classes += ' active'
    }else{
      this.classes += ' unactive'
    }
  }

  ngOnInit() {

  }

  close(){
    if(this.routes.root !== 'side'){
       this.baseClasses()
       this.classes += ' unactive'
    }
    this.routes.navigate()
  }

  public baseClasses(){
    this.classes = 'side col-12 vh100 position-fixed p-0 m-0'
  }
}
