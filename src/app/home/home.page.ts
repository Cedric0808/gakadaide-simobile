import { Component } from '@angular/core';
import { Product } from '../product';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private product: Product,
    private transaction: Transaction,
  ) { }

  getProductCount(): number {
    return this.product.getProductCount();
  }

  getTodayTransactionCount(): number {
    return this.transaction.getTodayTransactionCount();
  }

  getTodayRevenue(): number {
    return this.transaction.getTodayRevenue();
  }

  getBestSellingProduct(): string {
    return this.transaction.getBestSellingProduct();
  }

}
