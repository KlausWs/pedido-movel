import { FormaPagamento } from './../entidades/FormaPagamento';
import { CondicaoPagamento } from './../entidades/CondicaoPagamento';
import { Cliente } from './../entidades/Cliente';
import { Injectable } from '@angular/core';
import { Produto } from '../entidades/Produto';

@Injectable()
export class PedidoService {

    products: Array<Produto>;
    clienteSelecionado: Cliente;
    condicaoSelecionada: CondicaoPagamento;
    formaSelecionada: FormaPagamento;

    constructor() {
        this.products = new Array<Produto>();
    }

    setCliente(cliente: Cliente){
        this.clienteSelecionado = cliente;
    }

    setCondicaoPagamento(condicao: CondicaoPagamento){
        this.condicaoSelecionada = condicao;
    }

    setFormaPagamento(forma: FormaPagamento){
        this.formaSelecionada = forma;
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

    getClienteSelecionado(){
        return this.clienteSelecionado;
    }

    getCondicaoPagamentoSelecionada(){
        return this.condicaoSelecionada;
    }

    getFormaPagamentoSelecionada(){
        return this.formaSelecionada;
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

    finalizar(){
        this.products = new Array<Produto>();
        this.clienteSelecionado = undefined;
        this.condicaoSelecionada = undefined;
    }

}

export class ProdutoUtilizado extends Produto {

    quantidadeSelecionada: number;
    garantiaSelecionada: boolean;
    seguroSelecionado: boolean;

}