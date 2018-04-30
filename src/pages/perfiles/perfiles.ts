import { Component , NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
})
export class PerfilesPage {
  peripheral: any = {};
  statusMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public ble: BLE,
    public toastCtrl: ToastController,
    public ngZone: NgZone
  ) {
     let device = navParams.get('device');
    if (device){
      this.setStatus('Conectando a ' + device.name || device.id);

      this.ble.connect(device.id).subscribe(
        peripheral => this.onConnected(peripheral),
        peripheral => this.onDeviceDisconnected(peripheral)
      );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilesPage');
  }
  
  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.setStatus('Conectado');
      this.peripheral = peripheral;
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'El periferico se ha desconectado',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  // Disconnect peripheral when leaving the page
  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }
}
