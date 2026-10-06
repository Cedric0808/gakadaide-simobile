import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  cartItems: any[] = [];

  quantityPurchased: number[] = [];

  constructor(private cart: Cart) { }

  ngOnInit() {
    this.cartItems = this.cart.cartItems;
    this.quantityPurchased = this.cart.quantityPurchased;
  }

  getTotal(): number {
    return this.cart.getTotal();
  }


}
