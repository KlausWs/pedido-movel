import { NavController } from 'ionic-angular';
import { ProdutoService } from './../services/ProdutoService';
import { PedidoService } from './../services/PedidoService';
import { DetalheProdutoController } from './../pages/detalheproduto/DetalheProdutoController';
import { Produto } from './../entidades/Produto';
import { Component, Input } from '@angular/core';


@Component({
    selector: "product-list",
    templateUrl: "productList.html"
})
export class ProductListComponent {
    @Input() products: Array<Produto>;
    @Input() cardTitle: string;

    pedidoService: PedidoService;
    produtoService: ProdutoService;

    constructor(public navCtrl: NavController, private _produtoService: ProdutoService, private _pedidoService: PedidoService) {
        this.produtoService = _produtoService;
        this.pedidoService = _pedidoService;
    }

    addProducts() {
        for (let product of this.products) {
            if ((<ProdutoTela>product).selecionado) {
                this.pedidoService.addProduct(product);
                (<ProdutoTela>product).selecionado = false;
            }
        }
    }

    alterarSelecaoProduto(produto: ProdutoTela) {
        produto.selecionado = !produto.selecionado;
    }


    exibirDetalhes(produto: Produto){
        this.navCtrl.push(DetalheProdutoController, {produto: produto});
    }

}

class ProdutoTela extends Produto {
    selecionado: boolean;
}