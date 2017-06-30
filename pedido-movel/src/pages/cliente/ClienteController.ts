import { PedidoController } from './../pedido/PedidoController';
import { PedidoService } from './../../services/PedidoService';
import { IdentificarClienteController } from './../identificarcliente/IdentificarClienteController';
import { ClienteService } from './../../services/ClienteService';
import { Cliente } from './../../entidades/Cliente';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'cliente.html',
})
export class ClienteController {

  cliente: Cliente;

  constructor(public navCtrl: NavController, public navParam: NavParams, public clienteService: ClienteService, public pedidoService: PedidoService) {
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
    if (isValid) {
      this.clienteService.gravar(model);
      if (this.navCtrl.getPrevious().data.component === IdentificarClienteController) {
        this.pedidoService.setCliente(model);
        this.navCtrl.remove(this.navCtrl.length()-2, 2);
      } else {
        this.navCtrl.pop();
      }
    }
  }

  cancelar() {
    this.navCtrl.pop();
  }

  cadastrar() {
    this.navCtrl.pop();
  }
}