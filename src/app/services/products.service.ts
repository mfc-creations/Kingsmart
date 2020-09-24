import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public url = environment.web_api_url_base;
  constructor(private http: HttpClient) {}
 

  // Get all products
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + 'fetch_products.php').pipe(
      map((data) => {
        return data;
      })
    );
  }

  // Add product
  addProducts(data) {
    return this.http.post(this.url + 'add_products.php', data).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Delete product
  deleteProduct(id) {
    return this.http.get(this.url + 'delete_product.php?id=' + id).pipe(
      map((response) => {
        return response;
      })
    );
  }
//edit product


editProduct(Data) {
  return this.http.post(this.url + 'edit_product.php', Data).pipe(
    map((response) => {
      return response;
    }
    ));
}



// editProduct(policy: Products){
//   return this.http.put<Products>(`${this.url}edit_product.php`, policy);
//  }


}