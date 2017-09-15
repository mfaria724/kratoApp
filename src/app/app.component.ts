import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PromosPage } from '../pages/promos/promos';
import { RecordatoriosPage } from '../pages/recordatorios/recordatorios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PromosPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Promociones', component: PromosPage },
      { title: 'Recordatorios', component: RecordatoriosPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

    if (page.component===RecordatoriosPage){
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Recordatorio!',
      subTitle: 'Debe tomar su medicamento a las: ',
      buttons: ['OK']
    });
    alert.present();
  }
}
