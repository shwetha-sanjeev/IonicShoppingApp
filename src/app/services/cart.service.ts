import { Injectable } from '@angular/core';
import food_data from 'src/data/food' ;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private data = [];
 
  constructor() { this.data = food_data;}
 
  getProducts() { return this.data; }
  getCart() {return this.cart;   }
  addProduct(product: any) { this.cart.push(product);}

}
