import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'cliente.html',
})
export class ClienteController {


  constructor(public navCtrl: NavController, public navParam: NavParams) {
    if (navParam) {
      let cliente = navParam.get('cliente')
      if (cliente) {
        {{cliente}}
      }
    }
  }

  cadastrar() {
    this.navCtrl.pop();
  }


}