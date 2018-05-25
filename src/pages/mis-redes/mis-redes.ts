import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedDetallePage } from '../red-detalle/red-detalle';
import { RedesProvider } from '../../providers/redes/redes';


@Component({
  selector: 'page-mis-redes',
  templateUrl: 'mis-redes.html',
})
export class MisRedesPage {
  public listadoRedes: any[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public redesProv: RedesProvider) {
  
      this.listadoRedes = this.redesProv.listRedes();
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisRedesPage');
  }
  nuevaRed(){
    this.navCtrl.push(RedDetallePage);
  }
}
