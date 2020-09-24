import { Component, OnInit,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import {ProductsComponent} from '../products/products.component'

@Component({
  selector: 'app-additm',
  templateUrl: './additm.component.html',
  styleUrls: ['./additm.component.css']
})
export class AdditmComponent implements OnInit {
  item_details: FormGroup;

  @Input()
    isAdd: boolean;
  @Input() 
    isEdit:boolean;
  
  
  constructor(
  public formBuilder: FormBuilder,private productservice:ProductsService
  ) {
   
  }

  
  ngOnInit(): void {
    
    this.item_details = this.formBuilder.group({
      //id: [''],
      category: [''],
      name: [''],
      price: [''],
      discount: [''],
      description: [''],
      upfile: [''],
     
    });
  }

  editProduct(cat) {
    
      
   

    this.item_details = this.formBuilder.group({
      //id: [''],
      category: [cat.p_category],
      name: [cat.p_name],
      price: [cat.p_price],
      discount: [cat.p_discount_price],
      description: [cat.p_description],
      upfile: [cat.p_upfile],
      id:[cat.p_id]
     
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
  
    this.productservice.addProducts(formData)//    this.productservice.addProducts(this.item_details.values)
    .subscribe(
      response => console.log('Success=from component', response) ,
      error => console.log('!!!Error',error),
    );
    console.log(this.item_details.value);
  
    this.sendMessage();
    this.item_details.reset();
  }

  onEditSubmit() {
    var formData: any = new FormData();
    formData.append("category", this.item_details.get('category').value);
    formData.append("name", this.item_details.get('name').value);
    formData.append("price", this.item_details.get('price').value);
    formData.append("discount_price", this.item_details.get('discount').value);
    formData.append("description", this.item_details.get('description').value);
    formData.append("image", this.item_details.get('upfile').value);
    formData.append("id", this.item_details.get('id').value);
    console.log(this.item_details.value);
   
    this.productservice.editProduct(formData)//    this.productservice.addProducts()
    .subscribe(
      error => console.log('!!!Error',error),

    );
  
  

   
   
  
    this.sendMessage();
    this.item_details.reset();
  }





  message: string = "Hello Angular!"

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    
    this.messageEvent.emit(this.message)
    
  }
 
 
  




}
