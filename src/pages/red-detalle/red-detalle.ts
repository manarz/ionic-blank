import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MisRedesPage } from '../mis-redes/mis-redes';


@Component({
  selector: 'page-red-detalle',
  templateUrl: 'red-detalle.html',
})
export class RedDetallePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedDetallePage');
  }
  public agregarRed(){
    this.navCtrl.pop();
    /*
    this.navCtrl.push(RedDetallePage,  {
      red: 
    });
    */
  }
}
