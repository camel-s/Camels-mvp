import { Injectable } from '@angular/core';
import { SessaoService } from './sessao.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessaoGuard implements CanActivate {

  public path
  public route

  constructor(private sessaoService: SessaoService, private router: Router) {
    
  }

  public canActivate(){
    if(this.sessaoService.getSessao()) return true

    this.router.navigate(['/content/inicial'])
    return false
  }
}
