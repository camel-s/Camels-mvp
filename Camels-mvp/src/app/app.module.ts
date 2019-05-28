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
    SideLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
