import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Products } from "../models/products";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  heroes: Products[] = [];

  selectedHero: Products;
  item_details: FormGroup;

  ngOnInit() {
    this.loadProducts();
    this.item_details = this.formBuilder.group({
      //id: [''],
      category: [""],
      name: [""],
      price: [""],
      discount: [""],
      description: [""],
      upfile: [""],
    });
  }

  loadProducts() {
    this.productsService.getProducts().subscribe((pdts) => {
      this.heroes = pdts;
    });
  }
  onSelect(hero: Products): void {
    this.selectedHero = hero;
  }

  addtocart(data) {
    var formData: any = new FormData();
    formData.append("category", data.p_category);
    formData.append("name", data.p_name);
    formData.append("price", data.p_price);
    formData.append("discount_price", data.p_discount_price);
    formData.append("description", data.p_description);
    formData.append("image", "dfd");

    this.productsService
      .addToCart(formData) //    this.productservice.addProducts(this.item_details.values)
      .subscribe(
        (response) => console.log("Success=from component", response),
        (error) => console.log("!!!Error", error)
      );
    console.log(this.item_details.value);

    // this.sendMessage();
    this.item_details.reset();
  }
}
