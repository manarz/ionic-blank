import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegistrarsePage } from '../registrarse/registrarse';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { CerraduraListadoPage } from '../cerradura-listado/cerradura-listado';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }
  async login(user: User){
    try{
      console.log("Intentando Login");
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log("Login exitoso userid:" + result.user.uid );
      console.log(result);
      this.goToHomePage();
    } catch(e){
      console.log("Login fallido");
      console.log(e);
    }
  }
  registrar(){
    this.navCtrl.push(RegistrarsePage);
  }
  goToHomePage(){
    this.navCtrl.setRoot(CerraduraListadoPage);
  }
}
