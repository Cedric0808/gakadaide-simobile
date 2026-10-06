import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Product } from '../product';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  cartItems: any[] = [];

  quantityPurchased: number[] = [];

  message: string = '';

  constructor(
    private cart: Cart,
    private product: Product,
    private transaction: Transaction,
  ) { }

  ngOnInit() {
    this.cartItems = this.cart.cartItems;
    this.quantityPurchased = this.cart.quantityPurchased;
  }

  getTotal(): number {
    return this.cart.getTotal();
  }

  confirmTransaction() {
    var total: number = this.cart.getTotal();

    this.transaction.addTransaction(this.cartItems, this.quantityPurchased, total);

    this.product.reduceStock(this.cartItems, this.quantityPurchased);

    this.cart.clearCart();

    this.message = 'Transaksi berhasil dikonfirmasi';
  }


}
