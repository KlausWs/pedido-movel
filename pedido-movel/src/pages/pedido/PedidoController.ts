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

  constructor(public navCtrl: NavController, private _pedidoService: PedidoService, private _condicaoPagamentoService: CondicaoPagamentoService, private _produtoService: ProdutoService) {
    this.pedidoService = _pedidoService;
    this.condicaoPagamentoService = _condicaoPagamentoService;
    this.produtoService = _produtoService;
  }

  finalizar() {
    this.navCtrl.push(FinalizacaoController)
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

  continuarComprando(){
    this.navCtrl.pop();
  }

}

class CondicaoPagamentoTela extends CondicaoPagamento {

  valorParcela: number;

}