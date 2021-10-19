import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  orderTitles = [
    'Open Orders', 'Closed Orders', 'Order History', 'Balance'
  ];
  ngOnInit(): void {
  }

}
