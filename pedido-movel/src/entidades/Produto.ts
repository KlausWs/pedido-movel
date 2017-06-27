import { Grupo } from '../entidades/Grupo';

export class Produto {
  
  nome: string;
  codigo: string
  quantidade: number; 
  preco: number; 
  precoGarantia: number; 
  precoSeguro: number; 
  grupo: Grupo;
  imagem: string;
  
}
