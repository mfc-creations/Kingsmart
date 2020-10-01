import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../models/products';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  heroes: Products[] = [];
  
  selectedHero: Products;
  

  
ngOnInit() {
  this.loadProducts();
  }
  

  loadProducts(){
    this.productsService.getProducts().subscribe((pdts) => {
      this.heroes = pdts;
      
    });
  }
  onSelect(hero: Products): void {
    this.selectedHero = hero;
    
  }



  
}



