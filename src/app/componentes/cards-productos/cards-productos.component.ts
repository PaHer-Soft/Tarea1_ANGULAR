import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-productos',
  templateUrl: './cards-productos.component.html',
  styleUrls: ['./cards-productos.component.css']
})
export class CardsProductosComponent {

  constructor() { }
  oferta1 = 'Oferta 50% de descuento';
  nuevo_ingreso = 'Nuevo Ingreso!!';
  oferta2 = 'Cupon 15% regrso a clases';

  descip_oferta1 = 'Audifonos rebajados al 50% *aplica restricciones';
  descrip_new_ingreso = 'Tomacorriente de pared con puertos USB de 2.4 amperes para cargar tablets, telefonos y otros dispositivos electronicos';
  descip_oferta2 = 'En productos seleccionados.**15% de descuento válido en toda la tienda';

}
