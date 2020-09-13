import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-additm',
  templateUrl: './additm.component.html',
  styleUrls: ['./additm.component.css']
})
export class AdditmComponent implements OnInit {
  item_details: FormGroup;
  
  constructor(
  public formBuilder: FormBuilder,private productservice:ProductsService
  ) {}
  
  ngOnInit(): void {
    this.item_details = this.formBuilder.group({
      //id: [''],
      category: [''],
      name: [''],
      price: [''],
      discount: [''],
      description: [''],
      upfile: ['']
    });
  }
  onSubmit() {
    var formData: any = new FormData();
    formData.append("category", this.item_details.get('category').value);
    formData.append("name", this.item_details.get('name').value);
    formData.append("price", this.item_details.get('price').value);
    formData.append("discount_price", this.item_details.get('discount').value);
    formData.append("description", this.item_details.get('description').value);
    formData.append("image", this.item_details.get('upfile').value);
    console.log(this.item_details.value);
    this.productservice.addProducts(formData)//    this.productservice.addProducts(this.item_details.values)
    .subscribe(
      response => console.log('Success=from component', response) ,
      error => console.log('!!!Error',error)
    );
    this.item_details.reset();

  }
}
