import { Component } from '@angular/core';

import { HTTP } from '@ionic-native/http';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CerradurasProvider } from '../../providers/cerraduras/cerraduras';
import { CerraduraAltaPage } from '../cerradura-alta/cerradura-alta';

@Component({
  selector: 'page-cerradura-listado',
  templateUrl: 'cerradura-listado.html',
})
export class CerraduraListadoPage {
  public listadoCerraduras: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HTTP,
    public alertCtrl: AlertController,
    public cerradurasProv: CerradurasProvider
  ) {
    this.listadoCerraduras = this.cerradurasProv.getCerraduras();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisCerradurasPage');
  }
  public commandByWifi(urlData:any,cerradura:any){
    //console.log('open wifi');
    //alert(JSON.stringify(urlData));
    this.http.get('http://' + urlData.url, { LED:(cerradura.estaAbierta) ? 'OFF' : 'ON' }, {})
  .then(data => {
    cerradura.estaAbierta=!cerradura.estaAbierta;
    alert(JSON.stringify(data));
  })
  .catch(error => {
    alert(JSON.stringify(error));
  });
  
  }
  public toogleAperturaWifi(cerradura) {
    let prompt = this.alertCtrl.create({
      title: (cerradura.estaAbierta)?'Cerrar':'Abrir',
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
            this.commandByWifi(data, cerradura);
          }
        }
      ]
    });
    prompt.present();
  }
  public nuevaCerradura(){
    this.navCtrl.push(CerraduraAltaPage);
  }
}
