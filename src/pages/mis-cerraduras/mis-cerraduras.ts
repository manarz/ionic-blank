import { Component } from '@angular/core';

import { HTTP } from '@ionic-native/http';

import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mis-cerraduras',
  templateUrl: 'mis-cerraduras.html',
})
export class MisCerradurasPage {
  public cerraduraAbierta:boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HTTP,
    public alertCtrl: AlertController

  ) {
    this.cerraduraAbierta=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisCerradurasPage');
  }
  public commandByWifi(urlData:any){
    console.log('open wifi');
    //alert(JSON.stringify(urlData));
    this.http.get('http://' + urlData.url, {LED:(this.cerraduraAbierta)?'OFF':'ON'}, {})
  .then(data => {
    this.cerraduraAbierta=!this.cerraduraAbierta;
    alert(JSON.stringify(data));
  })
  .catch(error => {
    alert(JSON.stringify(error));
  });
  
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: (this.cerraduraAbierta)?'Cerrar':'Abrir',
      message: "Ingrese la url (solo para testing)",
      inputs: [
        {
          name: 'url',
          placeholder: 'localhost:8080'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log(JSON.stringify(data));
            this.commandByWifi(data);
          }
        }
      ]
    });
    prompt.present();
  }




}
