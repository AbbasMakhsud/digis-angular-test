import { Component, OnInit } from '@angular/core';
import {MarketNews} from "../../../entities/marketNewsData";

@Component({
  selector: 'app-market-news',
  templateUrl: './market-news.component.html',
  styleUrls: ['./market-news.component.scss']
})
export class MarketNewsComponent implements OnInit {

  constructor() { }
  newsData = MarketNews;

  ngOnInit(): void {
  }

}
