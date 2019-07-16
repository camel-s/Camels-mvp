import { Routes } from '@angular/router'
import { SideComponent } from './side/side.component';
import { SideCadastroComponent } from './side/side-cadastro/side-cadastro.component';
import { SideCadastroUsuarioComponent } from './side/side-cadastro/side-cadastro-usuario/side-cadastro-usuario.component';
import { SideCadastroOfertaComponent } from './side/side-cadastro/side-cadastro-oferta/side-cadastro-oferta.component';
import { SideCadastroServicoComponent } from './side/side-cadastro/side-cadastro-servico/side-cadastro-servico.component';
import { SideListagemComponent } from './side/side-listagem/side-listagem.component';
import { SideLoginComponent } from './side/side-login/side-login.component';
import { ContentComponent } from './content/content.component';
import { ContentContratanteComponent } from './content/content-contratante/content-contratante.component';
import { ContentOferenteComponent } from './content/content-oferente/content-oferente.component';
import { SideListagemOfertaComponent } from './side/side-listagem/side-listagem-oferta/side-listagem-oferta.component';
import { SideListagemServicoComponent } from './side/side-listagem/side-listagem-servico/side-listagem-servico.component';
import { SideEditarComponent } from './side/side-editar/side-editar.component';
import { SideEditarOfertaComponent } from './side/side-editar/side-editar-oferta/side-editar-oferta.component';
import { SideEditarServicoComponent } from './side/side-editar/side-editar-servico/side-editar-servico.component';
import { SideOfertaComponent } from './side/side-oferta/side-oferta.component';
import { SessaoGuard } from './services/sessao-guard.service';
import { ContentInicialComponent } from './content/content-inicial/content-inicial.component';

export const ROUTES: Routes = [
    { path: 'side', component: SideComponent, 
        children: [
            { path: 'cadastro', component: SideCadastroComponent, 
                children: [
                { path: 'usuario', component: SideCadastroUsuarioComponent},
                    { path: 'oferta', component: SideCadastroOfertaComponent, canActivate: [SessaoGuard]},
                    { path: 'servico', component: SideCadastroServicoComponent, canActivate: [SessaoGuard]}  
            ]},
            {
                path: 'listagem', component: SideListagemComponent, canActivate: [SessaoGuard],
                children: [
                    { path: 'oferta', component: SideListagemOfertaComponent },
                    { path: 'servico', component: SideListagemServicoComponent }
            ]},
            {
                path: 'editar', component: SideEditarComponent, canActivate: [SessaoGuard],
                children: [
                    { path: 'oferta', component: SideEditarOfertaComponent },
                    { path: 'oferta/:id', component: SideEditarOfertaComponent },
                    { path: 'servico', component: SideEditarServicoComponent },
                    { path: 'servico/:id', component: SideEditarServicoComponent }
                ]
            },
            { path: 'oferta/:id', component: SideOfertaComponent, canActivate: [SessaoGuard] }, 
            { path: 'login', component: SideLoginComponent }
        ]
    },
    { path: 'content', component: ContentComponent,
        children: [
            { path: 'contratante', component: ContentContratanteComponent},
            { path: 'oferente', component: ContentOferenteComponent},
            { path: 'inicial', component: ContentInicialComponent }
        ]
    },
    {
        path: '', component: ContentContratanteComponent, canActivate:[SessaoGuard] 
    }

]