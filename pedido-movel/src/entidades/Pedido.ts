import { Cliente } from '../entidades/Cliente';
import { PedidoItem } from '../entidades/PedidoItem';

export class Pedido {
  
  numero: number;
  itens: Array<PedidoItem>;
  cliente: Cliente; 
  
}