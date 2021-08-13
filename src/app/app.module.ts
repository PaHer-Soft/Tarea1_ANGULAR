import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarPrincipalComponent } from './componentes/navbar-principal/navbar-principal.component';
import { NavbarMenuComponent } from './componentes/navbar-menu/navbar-menu.component';
import { SidebarProductosComponent } from './componentes/sidebar-productos/sidebar-productos.component';
import { CarouselProductosComponent } from './componentes/carousel-productos/carousel-productos.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { FooterComponent } from './componentes/footer/footer.component';
import { CardsProductosComponent } from './componentes/cards-productos/cards-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPrincipalComponent,
    NavbarMenuComponent,
    SidebarProductosComponent,
    CarouselProductosComponent,
    FooterComponent,
    CardsProductosComponent
  ],
    imports: [
        BrowserModule,
        IvyCarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
