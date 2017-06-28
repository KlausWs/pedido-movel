import { ButtonPedidoComponent } from './../components/buttonPedido';
import { ProductListComponent } from './../components/productList';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { BrCurrencyPipe } from './../pipes/brCurrency';
import { CondicaoPagamentoService } from './../services/CondicaoPagamentoService';
import { FooterComponent } from './../components/footer';
import { ConsultaClienteController } from './../pages/consultacliente/ConsultaClienteController';
import { ClienteService } from './../services/ClienteService';
import { ProdutoService } from './../services/ProdutoService';
import { PedidoService } from './../services/PedidoService';
import { GrupoService } from './../services/GrupoService';
import { ClienteController } from './../pages/cliente/ClienteController';
import { FinalizacaoController } from './../pages/finalizacao/FinalizacaoController';
import { PedidoController } from './../pages/pedido/PedidoController';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {LOCALE_ID} from '@angular/core';

import { SeniorStoreTool } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProdutosController } from '../pages/produtos/ProdutosController';
import { GruposController } from '../pages/grupos/GruposController';
import { DetalheProdutoController } from './../pages/detalheproduto/DetalheProdutoController';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    SeniorStoreTool,
    HomePage,
    ListPage,
    ProdutosController,
    GruposController,
    DetalheProdutoController,
    PedidoController,
    FinalizacaoController,
    ClienteController,
    ConsultaClienteController,
    FooterComponent,
    BrCurrencyPipe,
    ProductListComponent,
    ButtonPedidoComponent
  ],
  imports: [
    BrowserModule,
    DateValueAccessorModule,
    IonicModule.forRoot(SeniorStoreTool),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SeniorStoreTool,
    HomePage,
    ListPage,
    ProdutosController,
    GruposController,
    DetalheProdutoController,
    PedidoController,
    FinalizacaoController,
    ClienteController,
    ConsultaClienteController,
    FooterComponent,
    ProductListComponent,
    ButtonPedidoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GrupoService,
    PedidoService, 
    ProdutoService,
    ClienteService,
    CondicaoPagamentoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "pt-BR"}
  ]
})
export class AppModule {}
