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

  getProdutos(){
    return this.pedidoService.getProducts();
  }

}