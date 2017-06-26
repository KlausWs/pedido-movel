import { ClienteController } from './../cliente/ClienteController';
import { ConsultaClienteController } from './../consultacliente/ConsultaClienteController';
import { PedidoService } from './../../services/PedidoService';
import { FinalizacaoController } from './../finalizacao/FinalizacaoController';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'pedido.html',
})
export class PedidoController { 


  pedidoService : PedidoService;

  constructor(public navCtrl: NavController, private _pedidoService: PedidoService) {
    this.pedidoService = _pedidoService;
  }

  finalizar(){
    this.navCtrl.push(FinalizacaoController)
  }

  irParaTodosClientes(){
    this.navCtrl.push(ConsultaClienteController);
  }

  irParaCadastroClientes(){
    this.navCtrl.push(ClienteController);
  }

  getProdutos(){
    return this.pedidoService.getProducts();
  }
  
}