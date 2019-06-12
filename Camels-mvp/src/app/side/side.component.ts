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
  
  constructor(private route: ActivatedRoute) { 
    this.display = $(window).width();    
  }

  ngOnInit() {

  }

}
