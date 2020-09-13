import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  heroes: Products[] = [];

  selectedHero: Products;

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((pdts) => {
      this.heroes = pdts;
    });
  }
  onSelect(hero: Products): void {
    this.selectedHero = hero;
  }
}
