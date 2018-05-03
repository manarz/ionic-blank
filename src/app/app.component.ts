import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("NAV") nav:Nav;
  public rootPage:any;
  public pages:Array<{titulo:string,component:any,icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage= ContactoPage;
    this.pages=[{titulo:"Mis dispositivos", component:ContactoPage,icon:"home"},
                {titulo:"Bluetooth BLE",   component:InicioPage  ,icon:"information-circle"},
                {titulo:"Detalle", component:PerfilesPage,icon:"apps"},
                {titulo:"Notificaciones",component:AcercaPage  ,icon:"mail"}
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
}

