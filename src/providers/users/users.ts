import { Injectable } from '@angular/core';

@Injectable()
export class UsersProvider {

  constructor() {
    console.log('Hello UsersProvider Provider');
  }
  public getUsers(){
    return [{ esPropia: true,  descripcion: "Mi puerta frontal de casa", estaAbierta: true , celular:["1138144570"], redWifi:[{ssid:"fiber1",pass:"12345"}] },
                              { esPropia: true,  descripcion: "Mi puerta de atras de casa", estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: true,  descripcion: "Mi garage",                  estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: true,  descripcion: "Casa del fondo",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: false, descripcion: "Garage de Matias",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: false, descripcion: "Puerta de Vero",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: false, descripcion: "Puerta de la tia",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: false, descripcion: "Garage de Matias",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } ,
                              { esPropia: false, descripcion: "Puerta del abuelo",          estaAbierta: false, celular:["3372"],       redWifi:[{ssid:"fiber2",pass:"pepe1"}] } 
    ];
  }

}
