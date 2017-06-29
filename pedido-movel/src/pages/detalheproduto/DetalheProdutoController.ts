import { PedidoController } from './../pedido/PedidoController';
import { PedidoService } from './../../services/PedidoService';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from './../../services/ProdutoService';
import { Produto } from './../../entidades/Produto';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'detalheproduto.html',
})
export class DetalheProdutoController {

  public produtoSelecionado: Produto;
  public produtosRelacionados: Array<Produto>;
  public opt: string;

  constructor(public navCtrl: NavController, public navParam: NavParams, public produtoService: ProdutoService, public pedidoService: PedidoService) {
    if (navParam) {
      let produtoParam = navParam.get('produto')
      if (produtoParam) {
        this.produtoSelecionado = produtoParam;
        this.produtosRelacionados = this.getProdutosRelacionados(this.produtoSelecionado);
      }
    }
    this.opt = 'dsc';
  }

  public adicionarProduto(produto: Produto){
    this.pedidoService.addProduct(produto);
  }

  private getProdutosRelacionados(produto: Produto){
    let prods = new Array<Produto>();
    prods.push(produto);
    return this.produtoService.getProdutosComplementares(prods);
  }

}