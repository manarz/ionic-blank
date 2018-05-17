import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BLE } from '@ionic-native/ble';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SMS } from '@ionic-native/sms';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { AcercaPage } from '../pages/acerca/acerca';
import { MisCerradurasPage } from '../pages/mis-cerraduras/mis-cerraduras';
import { MisRedesPage } from '../pages/mis-redes/mis-redes';
import { VincularBluetoothPage } from '../pages/vincular-bluetooth/vincular-bluetooth';



MisCerradurasPage


@NgModule({
  declarations: [
    MyApp,

    InicioPage,
    PerfilesPage,
    AcercaPage,
    MisCerradurasPage,
    MisRedesPage,
    VincularBluetoothPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
 
    InicioPage,
    PerfilesPage,
    AcercaPage,
    MisCerradurasPage,
    MisRedesPage,
    VincularBluetoothPage

 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    BluetoothSerial,
    SMS,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
