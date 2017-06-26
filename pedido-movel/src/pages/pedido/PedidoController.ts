import { CondicaoPagamento } from './../../entidades/CondicaoPagamento';
import { CondicaoPagamentoService } from './../../services/CondicaoPagamentoService';
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
  condicaoPagamentoService: CondicaoPagamentoService;
  condicaoPagamento: CondicaoPagamento;

  constructor(public navCtrl: NavController, private _pedidoService: PedidoService, private _condicaoPagamentoService: CondicaoPagamentoService) {
    this.pedidoService = _pedidoService;
    this.condicaoPagamentoService = _condicaoPagamentoService;
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

  getCondicoes(){
    return this.condicaoPagamentoService.getCondicoes();
  }
 
}