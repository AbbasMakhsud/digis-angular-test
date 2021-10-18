import { Component, OnInit } from '@angular/core';
import {MarketPairsData} from "../../../entities/market-pairs-data";

@Component({
  selector: 'app-market-pairs',
  templateUrl: './market-pairs.component.html',
  styleUrls: ['./market-pairs.component.scss']
})
export class MarketPairsComponent implements OnInit {

  constructor() { }

  marketPairsData = MarketPairsData;
  ngOnInit(): void {
  }

}
