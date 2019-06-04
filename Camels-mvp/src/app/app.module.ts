import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { MenuMainComponent } from './menu/menu-main/menu-main.component';
import { MenuInicialComponent } from './menu/menu-inicial/menu-inicial.component';
import { SideLoginComponent } from './side/side-login/side-login.component';
import { SideCadastroComponent } from './side/side-cadastro/side-cadastro.component';
import { SideCadastroOfertaComponent } from './side/side-cadastro/side-cadastro-oferta/side-cadastro-oferta.component';
import { SideCadastroUsuarioComponent } from './side/side-cadastro/side-cadastro-usuario/side-cadastro-usuario.component';
import { SideCadastroServicoComponent } from './side/side-cadastro/side-cadastro-servico/side-cadastro-servico.component';
import { SideListagemComponent } from './side/side-listagem/side-listagem.component';
import { SideAvaliacaoComponent } from './side/side-avaliacao/side-avaliacao.component';
import { ContentContratanteComponent } from './content/content-contratante/content-contratante.component';
import { ContentOferenteComponent } from './content/content-oferente/content-oferente.component';
import { MenuPerfilComponent } from './menu/menu-perfil/menu-perfil.component';
import { ContentInicialComponent } from './content/content-inicial/content-inicial.component';
import { SideListagemOfertaComponent } from './side/side-listagem/side-listagem-oferta/side-listagem-oferta.component';
import { SideListagemServicoComponent } from './side/side-listagem/side-listagem-servico/side-listagem-servico.component';
import { OfertaService } from './services/oferta.service';
import { ServicoService } from './services/servico.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SideComponent,
    MenuMainComponent,
    MenuInicialComponent,
    SideLoginComponent,
    SideCadastroComponent,
    SideCadastroOfertaComponent,
    SideCadastroUsuarioComponent,
    SideCadastroServicoComponent,
    SideListagemComponent,
    SideAvaliacaoComponent,
    ContentContratanteComponent,
    ContentOferenteComponent,
    MenuPerfilComponent,
    ContentInicialComponent,
    SideListagemOfertaComponent,
    SideListagemServicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    OfertaService, 
    ServicoService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
