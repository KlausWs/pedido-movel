import { PedidoController } from './../pedido/PedidoController';
import { Cliente } from './../../entidades/Cliente';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'cliente.html',
})
export class ClienteController {

  cliente: Cliente;

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    if (navParam) {
      let clienteParam = navParam.get('cliente')
      if (clienteParam) {
        this.cliente = clienteParam;
      } else {
        this.cliente = new Cliente();
      }
    }
  }



  save(model: Cliente, isValid: boolean) {
    if (isValid){
      if (){
        
      }
      console.log(model, isValid);
    }
  }

  irParaCarrinho() {
    this.navCtrl.push(PedidoController);
  }

  cadastrar() {
    this.navCtrl.pop();
  }


}