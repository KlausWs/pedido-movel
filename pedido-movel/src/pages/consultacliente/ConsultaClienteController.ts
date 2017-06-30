import { AppModule } from './../../app/app.module';
import { PedidoController } from './../pedido/PedidoController';
import { PedidoService } from './../../services/PedidoService';
import { IdentificarClienteController } from './../identificarcliente/IdentificarClienteController';
import { ClienteController } from './../cliente/ClienteController';
import { Cliente } from './../../entidades/Cliente';
import { ClienteService } from './../../services/ClienteService';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';



@Component({
  templateUrl: 'consultacliente.html',
})
export class ConsultaClienteController {

  clientes: Array<Cliente>;
  clienteService: ClienteService;
  pedidoService: PedidoService;

  constructor(public navCtrl: NavController, public _clienteService: ClienteService, public _pedidoService: PedidoService) {
    this.clientes = this._clienteService.clientes;
    this.pedidoService = this._pedidoService;
  }

  consultarClientes(ev: any) {
    this.clientes = this.clienteService.filterByText(ev.target.value);
  }

  exibirDetalhes(cliente: Cliente) {
    this.navCtrl.push(ClienteController, { cliente: cliente });
  }

  selecionar(cliente: Cliente) {
    if (this.navCtrl.getPrevious().data.component === IdentificarClienteController) {
      this.pedidoService.setCliente(cliente);
      this.navCtrl.remove(this.navCtrl.length()-2, 2);
    }
  }


}