import {Component, Input, Output, EventEmitter } from '@angular/core';

declare var $ : any;

@Component({
    selector: 'select-qtd',
    templateUrl: 'selectQtd.html'
})
export class SelectQtdComponent{ 
  quantidadeSelecionada: number = 0;
  @Output() quantidadeChange = new EventEmitter();
  
  @Input()
  get quantidade() {
    return this.quantidadeSelecionada;
  }
  
  set quantidade(val) {
    this.quantidadeSelecionada = val;
    this.quantidadeChange.emit(val);
  }

}