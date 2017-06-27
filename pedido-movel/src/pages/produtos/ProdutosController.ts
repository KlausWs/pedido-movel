import { PedidoController } from './../pedido/PedidoController';
import { PedidoService } from './../../services/PedidoService';
import { DetalheProdutoController } from './../detalheproduto/DetalheProdutoController';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/ProdutoService';
import { Produto } from '../../entidades/Produto';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'produtos.html',
})

export class ProdutosController {

  produtoService: ProdutoService;
  produtos: Array<Produto>;

  constructor(private _produtoService: ProdutoService, public navCtrl: NavController, public navParam: NavParams, private _pedidoService: PedidoService) {
    this.produtoService = _produtoService;

    if (navParam) {
      let grupo = navParam.get('grupo')
      if (grupo) {
        this.produtos = this.produtoService.filterByGroup(grupo);
      } else {
        this.produtos = this.produtoService.produtos;
      }
    }
  }

  consultarProdutos(ev: any) {
    this.produtos = this.produtoService.filterByText(ev.target.value);
  }

  irParaCarrinho() {
    this.navCtrl.push(PedidoController);
  }

}