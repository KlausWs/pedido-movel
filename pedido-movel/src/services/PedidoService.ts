<<<<<<< HEAD
import { Cliente } from './../entidades/Cliente';
=======
import { Pedido } from './../entidades/Pedido';
>>>>>>> e21b481e77a497cee1f3187876a2e5d59ce1f575
import { Injectable } from '@angular/core';
import { Produto } from '../entidades/Produto';

@Injectable()
export class PedidoService {

    products: Array<Produto>;
<<<<<<< HEAD
    clienteSelecionado: Cliente;
=======
    pedido: Pedido;
>>>>>>> e21b481e77a497cee1f3187876a2e5d59ce1f575

    constructor() {
        this.products = new Array<Produto>();
    }

    public setCliente(cliente: Cliente){
        this.clienteSelecionado = cliente;
    }

    addProduct(product: Produto) {
        let productClone: Produto = Object.create(product);
        if (!(<ProdutoUtilizado>productClone).quantidadeSelecionada) {
            (<ProdutoUtilizado>productClone).quantidadeSelecionada = 1;
        }
        this.products.push(productClone);
    }

    removeProduct(product: Produto) {
        let idx: number = this.products.indexOf(product);
        this.products.splice(idx, 1);
    }

    getProducts() {
        return this.products;
    }

    getSubTotal() {
        let subTotal: number = 0;
        this.products.forEach(produto => subTotal += produto.preco * (<ProdutoUtilizado>produto).quantidadeSelecionada);
        return subTotal;
    }

    getTotalGarantia() {
        let totalGarantia: number = 0;
        this.products.forEach(produto => {
            if ((<ProdutoUtilizado>produto).garantiaSelecionada) {
                totalGarantia += produto.precoGarantia * (<ProdutoUtilizado>produto).quantidadeSelecionada
            }
        });
        return totalGarantia;
    }

    getTotalSeguro() {
        let totalSeguro: number = 0;
        this.products.forEach(produto => {
            if ((<ProdutoUtilizado>produto).seguroSelecionado) {
                totalSeguro += produto.precoSeguro * (<ProdutoUtilizado>produto).quantidadeSelecionada
            }
        });
        return totalSeguro;
    }

    getTotal() {
        return this.getSubTotal() + this.getTotalGarantia() + this.getTotalSeguro();
    }

    getQuantidadeProdutos(){
        return this.products.length;
    }

}

export class ProdutoUtilizado extends Produto {

    quantidadeSelecionada: number;
    garantiaSelecionada: boolean;
    seguroSelecionado: boolean;

}