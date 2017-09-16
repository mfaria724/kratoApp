import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recordatorios',
  templateUrl: 'recordatorios.html',
})
export class RecordatoriosPage {

  //Modelo de primeraVez
	myDate: string = window.localStorage['primeraVez'];
	//Modelo de frecuencia
  myTime: string = window.localStorage['frecuencia'];

  constructor(public navCtrl: NavController) {
  	
  }

  //Añade recordatorio.
  addRecord(){

    //Guarda los modelos el en localStorage.
    window.localStorage['primeraVez'] = this.myDate;
    window.localStorage['frecuencia'] = this.myTime;

    //Variable necesarias para calcular la hora de la próxima alarma.
    var ahora = (new Date().getHours())*60 + (new Date().getMinutes());
    var primeraVez = Number(this.myDate.substring(0,2))*60 + Number(this.myDate.substring(3,5));
    var frecuencia = Number(this.myTime.substring(0,2))*60 + Number(this.myTime.substring(3,5));

    //Si ya se ha superado la hora de inicio del recordatorio, genera la próxima ocasión.
    if (primeraVez < ahora){
      while(primeraVez < ahora){
        primeraVez += frecuencia;  
      }
    } 

    //Calcula la cantidad de dias.
    if (primeraVez >= 1440) { primeraVez -= 1440; }
    
    //Convierte los minutos en horas y minutos.
    var horas = Math.floor( primeraVez / 60);
    var minutos = (primeraVez % 60).toString();
    //Agrega cifra si los minutos la necesitan.
    if  (minutos.length === 1) { minutos = "0" + minutos; }
    
    //Establece el formato de 12 h y guarda el recordatorio en el localStorge.
    if (horas > 12) {
      horas -= 12;
      window.localStorage['recordatorio'] = horas + ":" +  minutos + " p.m.";   
    } else {
      window.localStorage['recordatorio'] = horas + ":" +  minutos + " a.m.";   
    }

  }
}
