import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  copy_rigth = '2021 PaHerCa-Soft, Inc'
  inicio = 'Inicio';
  ofertas = 'Ofertas/Liquidacion';
  contactenos = 'Contactenos';

}
