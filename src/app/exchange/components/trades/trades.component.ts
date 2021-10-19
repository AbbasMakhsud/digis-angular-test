import { Component, OnInit } from '@angular/core';
import {TradesBottom, TradesTop} from "../../../entities/tradesData";

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  constructor() { }

  topTrades = TradesTop;
  topBottom = TradesBottom;

  ngOnInit(): void {
  }

}
