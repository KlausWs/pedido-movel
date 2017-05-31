import { FinalizacaoController } from './../finalizacao/FinalizacaoController';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'pedido.html',
})
export class PedidoController { 


 constructor(public navCtrl: NavController) {
    
  }

  finalizar(){
    this.navCtrl.push(FinalizacaoController)
  }

}