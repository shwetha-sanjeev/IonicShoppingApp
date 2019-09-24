import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  cart = [];
  items = [];

// used by <ion-slides>
  sliderConfig = {   
    slidesPerView: 1.9,
    spaceBetween: 9,
    centeredSlides: true
  };

  constructor(public router: Router, public cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  addToCart(product) {this.cartService.addProduct(product); }
  openCart() { this.router.navigate(['cart']); }

}
