import { PedidoService } from './../services/PedidoService';
import { ProdutosController } from './../pages/produtos/ProdutosController';
import { PedidoController } from './../pages/pedido/PedidoController';
import { NavController } from 'ionic-angular';
import { Component  } from '@angular/core';

@Component({
  templateUrl: "buttonPedido.html",
  selector: "button-pedido",
})
export class ButtonPedidoComponent {

  pedidoService: PedidoService;

  constructor(public navCtrl: NavController, private _perdidoService: PedidoService) {
    this.pedidoService = _perdidoService;
  }

  irParaCarrinho() {
    this.navCtrl.push(PedidoController);
  }

  irParaProdutos() {
    this.navCtrl.push(ProdutosController);
  }

  getQuantidadeProdutos() {
    return this.pedidoService.getQuantidadeProdutos();
  }
}

