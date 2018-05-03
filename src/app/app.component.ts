import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { AcercaPage } from '../pages/acerca/acerca';
import { MisCerradurasPage } from '../pages/mis-cerraduras/mis-cerraduras';
import { MisRedesPage } from '../pages/mis-redes/mis-redes';
import { VincularBluetoothPage } from '../pages/vincular-bluetooth/vincular-bluetooth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("NAV") nav:Nav;
  public rootPage:any;
  public pages:Array<{titulo:string,component:any,icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage= MisCerradurasPage;
    this.pages=[{titulo:"Cerraduras y llaves", component: MisCerradurasPage,icon:"key"},
                {titulo:"Vincular Bluetooth",  component: VincularBluetoothPage, icon:"bluetooth"},
                {titulo:"Mis Redes",           component: MisRedesPage,icon:"wifi"},

                {titulo:"Notificaciones sms",component:AcercaPage  ,icon:"mail"},
                {titulo:"Bluetooth BLE",   component:InicioPage  ,icon:"information-circle"},
                {titulo:"Detalle BLE", component:PerfilesPage,icon:"code-working"},

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

