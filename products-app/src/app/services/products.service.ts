import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productsUrl = 'http://localhost:4000/products';
  
  constructor( private httpClient: HttpClient) { 
 
  }



  getProducts(): Observable<object> {
    return this.httpClient.get(this.productsUrl)
  }


}
