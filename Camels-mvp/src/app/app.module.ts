import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { SideOfertaComponent } from './side/side-oferta/side-oferta.component';
import { SideServicoComponent } from './side/side-servico/side-servico.component';
import { RoutesService } from './services/routes.service';
import { SideEditarComponent } from './side/side-editar/side-editar.component';
import { SideEditarOfertaComponent } from './side/side-editar/side-editar-oferta/side-editar-oferta.component';
import { SideEditarServicoComponent } from './side/side-editar/side-editar-servico/side-editar-servico.component';
import { InfoComponent } from './side/info/info.component';


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
    SideListagemServicoComponent,
    SideOfertaComponent,
    SideServicoComponent,
    SideEditarComponent,
    SideEditarOfertaComponent,
    SideEditarServicoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    OfertaService, 
    ServicoService,
    RoutesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
