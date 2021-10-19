import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {MarketsComponent} from './markets/markets.component';
import {ExchangeComponent} from "./exchange/exchange.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MarketPairsComponent } from './exchange/components/market-pairs/market-pairs.component';
import { ChartTableComponent } from './exchange/components/chart-table/chart-table.component';
import { TradesComponent } from './exchange/components/trades/trades.component';
import { MarketNewsComponent } from './exchange/components/market-news/market-news.component';
import { OrdersComponent } from './exchange/components/orders/orders.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import { TableComponent } from './table/table.component';
import {ChartsModule} from "ng2-charts";


const routes: Routes = [
  {
    path: '',
    component: ExchangeComponent
  },
  {
    path: 'exchange',
    component: ExchangeComponent
  },
  {
    path: 'markets',
    component: MarketsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketsComponent,
    ExchangeComponent,
    MarketPairsComponent,
    ChartTableComponent,
    TradesComponent,
    MarketNewsComponent,
    OrdersComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TabsModule,
    ChartsModule
  ],
  exports : [
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
