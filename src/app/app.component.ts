import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Añade ppáginas del proyecto */
import { PromosPage } from '../pages/promos/promos';
import { RecordatoriosPage } from '../pages/recordatorios/recordatorios';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PromosPage;
  activePage: any;

  pages: Array<{title: string, component: any, icon: string, color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController) {
    this.initializeApp();

    // Arreglo usado pata creacion de menu con ngFor
    this.pages = [
      { title: 'Promociones', component: PromosPage, icon:"pricetags", color:'promos' },
      { title: 'Recordatorios', component: RecordatoriosPage, icon:"clock", color:'recordatorios' }
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    //Muestra la página seleccionada por el usurario
    this.nav.setRoot(page.component);
    this.activePage = page;

    //Si la página seleccionada es Recordatorios, muestra el mensaje con el mismo.
    if (page.component===RecordatoriosPage){
      this.showAlert();
    }
  }

  //Alerta que se muestra con la Hora del recordatorio.
  showAlert() {
      if (window.localStorage['recordatorio']!==undefined){
        let alert = this.alertCtrl.create({
        title: 'Recordatorio!',
        subTitle: 'Debe tomar su medicamento a las: ' + window.localStorage['recordatorio'],
        buttons: ['OK']  
      });
      alert.present();
      
    }
    
  }

  checkColor(page){

    var classes = {};
    classes[page.color] = true;

    if (page === this.activePage){
      return classes;  
    }
  }


}
