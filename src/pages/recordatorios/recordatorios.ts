import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recordatorios',
  templateUrl: 'recordatorios.html',
})
export class RecordatoriosPage {

	myDate: string = window.localStorage['primeraVez'];
	myTime: string = window.localStorage['frecuencia'];

  constructor(public navCtrl: NavController) {
  	
  }

  addRecord(){
    window.localStorage['primeraVez'] = this.myDate;
    window.localStorage['frecuencia'] = this.myTime;
    

  }

}
