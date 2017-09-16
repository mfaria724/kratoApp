import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})

export class PromosPage {

	products: Array<{nombre: string, descripcion: string, imgPath: string}>;

  constructor(public navCtrl: NavController) {
    //Arreglo para el ngFor de los cards.
  	this.products = [
      { nombre: 'Producto 1', descripcion: 'Esta es la descripcion del producto 1', imgPath:'assets/img/jarabe.jpg' },
      { nombre: 'Producto 2', descripcion: 'Esta es la descripcion del producto 2', imgPath:'assets/img/pastillas.jpg'},
   	  { nombre: 'Producto 3', descripcion: 'Esta es la descripcion del producto 3', imgPath:'assets/img/curitas.jpg'}
    ];
  }
 
}
