import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  private display: number
 
  constructor() { 
     this.display = $(window).width();    
  }

  ngOnInit() {
  }

}
