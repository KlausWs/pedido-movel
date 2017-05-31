import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'cliente.html',
})
export class ClienteController {


  constructor(public navCtrl: NavController) {

  }

  cadastrar() {
    this.navCtrl.pop();
  }


}