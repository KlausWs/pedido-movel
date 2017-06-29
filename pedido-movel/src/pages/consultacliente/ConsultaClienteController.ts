import { ClienteController } from './../cliente/ClienteController';
import { Cliente } from './../../entidades/Cliente';
import { ClienteService } from './../../services/ClienteService';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'consultacliente.html',
})
export class ConsultaClienteController { 
    
  clientes: Array<Cliente>;

  constructor(public navCtrl: NavController, public clienteService: ClienteService) {
    this.clientes = this.clienteService.clientes;
  }

  consultarClientes(ev: any){
    this.clientes = this.clienteService.filterByText(ev.target.value);
  }

  exibirDetalhes(cliente: Cliente){
    this.navCtrl.push(ClienteController, { cliente: cliente });
  }

}