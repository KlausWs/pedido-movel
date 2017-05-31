import { DetalheProdutoController } from './../detalheproduto/DetalheProdutoController';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/ProdutoService';
import { Produto } from '../../entidades/Produto';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'produtos.html',
  providers: [ProdutoService]
})

export class ProdutosController {

  produtoService: ProdutoService;

  constructor(private _produtoService: ProdutoService, public navCtrl: NavController) {
    this.produtoService = _produtoService;
  }


  exibirDetalhes() {
    this.navCtrl.push(DetalheProdutoController);
  }
}