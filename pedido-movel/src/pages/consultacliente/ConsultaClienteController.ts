import { Cliente } from './../../entidades/Cliente';
import { PedidoController } from './../pedido/PedidoController';
import { ClienteService } from './../../services/ClienteService';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'consultacliente.html',
})
export class ConsultaClienteController { 
    
  clientes: Array<Cliente>;
  clienteService : ClienteService;

  constructor(public navCtrl: NavController, private _clienteService: ClienteService) {
    this.clienteService = _clienteService;
    this.clientes = this.clienteService.clientes;
  }

  consultarClientes(ev: any){
    this.clientes = this.clienteService.filterByText(ev.target.value);
  }

  irParaCarrinho(){
     this.navCtrl.push(PedidoController);
  }

}