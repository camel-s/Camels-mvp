import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs'
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  private display: number
  private exitRoute: any 
  
  constructor(private route: ActivatedRoute) { 
    this.exitRoute = this.route.snapshot
    console.log(this.exitRoute.toString())
    this.display = $(window).width();    
  }

  ngOnInit() {

  }

}
