import { Component, OnInit } from '@angular/core';
import { product } from './featre';
import { items } from './mock';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  ItemS = items;
  constructor() {}

  ngOnInit(): void {}
}
