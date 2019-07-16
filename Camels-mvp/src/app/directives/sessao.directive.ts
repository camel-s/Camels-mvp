import { Directive, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appSessao]'
})
export class SessaoDirective {

  @Input('appSessao') public routes: string

  constructor(private activatedRoute: ActivatedRoute) {

  }
  
  @HostListener('click') onclick(){
    alert(this.routes)
  }

}
