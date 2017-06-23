import { DetalheProdutoController } from './../detalheproduto/DetalheProdutoController';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/ProdutoService';
import { Produto } from '../../entidades/Produto';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'produtos.html',
  providers: [ProdutoService]
})

export class ProdutosController {

  produtoService: ProdutoService;
  produtos: Array<Produto>;

  constructor(private _produtoService: ProdutoService, public navCtrl: NavController, public navParam: NavParams) {
    this.produtoService = _produtoService;

    if (navParam) {
      let grupo = navParam.get('grupo')
      if (grupo) {
        this.produtos = this.produtoService.filterByGroup(grupo);
      }
    }
  }

  exibirDetalhes() {
    this.navCtrl.push(DetalheProdutoController);
  }

  consultarProdutos(ev: any) {
    this.produtos = this.produtoService.filterByText(ev.target.value);
  }

}