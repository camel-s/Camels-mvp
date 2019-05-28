import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { MenuMainComponent } from './menu/menu-main/menu-main.component';
import { MenuInicialComponent } from './menu/menu-inicial/menu-inicial.component';
import { ContentContrateComponent } from './content/content-contrate/content-contrate.component';
import { ContentOferecaComponent } from './content/content-ofereca/content-ofereca.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SideComponent,
    MenuMainComponent,
    MenuInicialComponent,
    ContentContrateComponent,
    ContentOferecaComponent,
    SideLoginComponent,
    SideCadastroComponent,
    SideCadastroOfertaComponent,
    SideCadastroUsuarioComponent,
    SideCadastroServicoComponent,
    SideListagemComponent,
    SideAvaliacaoComponent,
    ContentContratanteComponent,
    ContentOferenteComponent,
    MenuPerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
