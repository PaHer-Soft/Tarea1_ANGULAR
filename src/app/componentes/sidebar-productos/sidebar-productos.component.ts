import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-productos',
  templateUrl: './sidebar-productos.component.html',
  styleUrls: ['./sidebar-productos.component.css']
})
export class SidebarProductosComponent {

  constructor() { }
  productos = 'Productos';
  audifonos = 'Audifonos';
  bocinas = 'Bocinas';
  celulares = 'Celulares';
  computadoras = 'Computadoras';
  discos = 'Discos Duros';
  impresoras = 'Impresoras';
  mouses = 'Mouse';
  monitores = 'Monitores';
  teclados = 'Teclados';


}
