import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mis-cerraduras',
  templateUrl: 'mis-cerraduras.html',
})
export class MisCerradurasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisCerradurasPage');
  }

}
