import { Component, OnInit } from '@angular/core';
import { SessaoService } from '../services/sessao.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private sessaoService: SessaoService) {}

  ngOnInit() {
  }

}
