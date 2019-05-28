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
import { MenuComponent } from './menu/menu.component';
import { MenuInicialComponent } from './menu/menu-inicial/menu-inicial.component';
import { MenuMainComponent } from './menu/menu-main/menu-main.component';
import { MenuPerfilComponent } from './menu/menu-perfil/menu-perfil.component';

export const ROUTES: Routes = [
    { path: 'side', component: SideComponent, 
        children: [
            { path: 'cadastro', component: SideCadastroComponent, 
                children: [
                { path: 'usuario', component: SideCadastroUsuarioComponent},
                { path: 'oferta', component: SideCadastroOfertaComponent},
                { path: 'servico', component: SideCadastroServicoComponent}  
            ]},
            { path: 'listagem', component: SideListagemComponent },
            { path: 'login', component: SideLoginComponent }
        ]
    },
    { path: 'content', component: ContentComponent,
        children: [
            { path: 'contratante', component: ContentContratanteComponent },
            { path: 'oferente', component: ContentOferenteComponent}
        ]
    },
    { path: 'menu', component: MenuComponent,
        children: [
            { path: 'inicial', component: MenuInicialComponent},
            { path: 'main', component: MenuMainComponent},
            { path: 'perfil', component: MenuPerfilComponent}
        ]
    }
]