import { ProdutoService } from './../../services/ProdutoService';
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

  pedidoService: PedidoService;
  produtoService: ProdutoService;
  condicaoPagamentoService: CondicaoPagamentoService;
  condicaoPagamento: CondicaoPagamento;

  constructor(public navCtrl: NavController, private _pedidoService: PedidoService, private _condicaoPagamentoService: CondicaoPagamentoService, private _produtoService: ProdutoService) {
    this.pedidoService = _pedidoService;
    this.condicaoPagamentoService = _condicaoPagamentoService;
    this.produtoService = _produtoService;
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

  getProdutosComplementares(){
    return this.produtoService.getProdutosComplementares(this.getProdutos());
  }

  getCondicoes(){
    this.condicaoPagamentoService.getCondicoes().forEach(condicao => (<CondicaoPagamentoTela>condicao).valorParcela = this.getValor() / condicao.parcelas);
    return this.condicaoPagamentoService.getCondicoes();
  }

  getValor(){
    return this.pedidoService.getValor();
  }

}

class CondicaoPagamentoTela extends CondicaoPagamento {

  valorParcela: number;

}