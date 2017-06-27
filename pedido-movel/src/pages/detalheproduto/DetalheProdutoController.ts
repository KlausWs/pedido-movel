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

  constructor(public navCtrl: NavController, public navParam: NavParams, public produtoService: ProdutoService) {
    if (navParam) {
      let produtoParam = navParam.get('produto')
      if (produtoParam) {
        this.produtoSelecionado = produtoParam;
        this.produtosRelacionados = this.getProdutosRelacionados(this.produtoSelecionado);
      }
    }
  }

  private getProdutosRelacionados(produto: Produto){
    let prods = new Array<Produto>();
    prods.push(produto);
    return this.produtoService.getProdutosComplementares(prods);
  }






}