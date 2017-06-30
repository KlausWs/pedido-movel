import { IdentificarClienteController } from './../identificarcliente/IdentificarClienteController';
import { Cliente } from './../../entidades/Cliente';

import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { Produto } from './../../entidades/Produto';
import { ProdutoService } from './../../services/ProdutoService';
import { CondicaoPagamento } from './../../entidades/CondicaoPagamento';
import { CondicaoPagamentoService } from './../../services/CondicaoPagamentoService';
import { PedidoService, ProdutoUtilizado } from './../../services/PedidoService';
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

  constructor(public navCtrl: NavController, private _pedidoService: PedidoService, private _condicaoPagamentoService: CondicaoPagamentoService, private _produtoService: ProdutoService, public modalController: ModalController, public navParam: NavParams) {
    this.pedidoService = _pedidoService;
    this.condicaoPagamentoService = _condicaoPagamentoService;
    this.produtoService = _produtoService;
  }

  abrirSelecaoCliente() {
    let selecaoClienteModal = this.modalController.create(IdentificarClienteController);
    selecaoClienteModal.present();
  }

  getClienteSelecionado(){
    return this.pedidoService.clienteSelecionado;
  }

  finalizar() {
    if (this.getClienteSelecionado()) {
      this.navCtrl.push(FinalizacaoController)
    } else {
      this.abrirSelecaoCliente();
    }
  }

  getProdutos() {
    return this.pedidoService.getProducts();
  }

  getProdutosComplementares() {
    return this.produtoService.getProdutosComplementares(this.getProdutos());
  }

  getCondicoes() {
    this.condicaoPagamentoService.getCondicoes().forEach(condicao => (<CondicaoPagamentoTela>condicao).valorParcela = this.getTotal() / condicao.parcelas);
    return this.condicaoPagamentoService.getCondicoes();
  }

  getTotal() {
    return this.pedidoService.getTotal();
  }

  getSubTotal() {
    return this.pedidoService.getSubTotal();
  }

  getTotalGarantia() {
    return this.pedidoService.getTotalGarantia();
  }

  getTotalSeguro() {
    return this.pedidoService.getTotalSeguro();
  }

  alterarSelecaoGarantia(produto: ProdutoUtilizado) {
    produto.garantiaSelecionada = !produto.garantiaSelecionada;
  }

  alterarSelecaoSeguro(produto: ProdutoUtilizado) {
    produto.seguroSelecionado = !produto.seguroSelecionado;
  }

  removerProduto(produto: Produto) {
    this.pedidoService.removeProduct(produto);
  }

  continuarComprando() {
    this.navCtrl.pop();
  }

  increment(produto: ProdutoUtilizado) {
    produto.quantidadeSelecionada += 1;
  }

  decrement(produto: ProdutoUtilizado) {
    if (produto.quantidadeSelecionada > 0) {
      produto.quantidadeSelecionada -= 1;
    }
  }

  //teste(e1: CondicaoPagamento, e2: CondicaoPagamento): boolean {
  //    return (<CondicaoPagamentoTela>e1).valorParcela === (<CondicaoPagamentoTela>e2).valorParcela;
  //  }

}

class CondicaoPagamentoTela extends CondicaoPagamento {

  valorParcela: number;

}