import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent {

  constructor() { }
  nombre = 'PaHerCa Solutions';
  descripcion = 'Soluciones al alcance de tu bolsillo!'

}
