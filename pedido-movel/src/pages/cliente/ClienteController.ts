import { ClienteService } from './../../services/ClienteService';
import { PedidoController } from './../pedido/PedidoController';
import { Cliente } from './../../entidades/Cliente';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'cliente.html',
})
export class ClienteController {

  cliente: Cliente;

  constructor(public navCtrl: NavController, public navParam: NavParams, public clienteService: ClienteService) {
    if (navParam) {
      let clienteParam = navParam.get('cliente')
      if (clienteParam) {
        this.cliente = clienteParam;
      } else {
        this.cliente = new Cliente();
      }
    }
  }

  salvar(model: Cliente, isValid: boolean) {
    console.log(model);
    if (isValid) {
      this.clienteService.gravar(model);
      this.navCtrl.pop();
    }
  }

  cancelar() {
    this.navCtrl.pop();
  }


  irParaCarrinho() {
    this.navCtrl.push(PedidoController);
  }

  cadastrar() {
    this.navCtrl.pop();
  }
}