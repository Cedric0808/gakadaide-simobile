import { Component } from '@angular/core';
import { Product } from '../product';
import { Transaction } from '../transaction';
import { AnimationController } from '@ionic/angular';

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
    private animationCtrl: AnimationController,
  ) {}

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

  fadeInDashboard() {
    const dashboardElement = document.querySelector(
      '#dashboardAnimation',
    ) as HTMLElement;

    if (dashboardElement != null) {
      const animation = this.animationCtrl
        .create()
        .addElement(dashboardElement)
        .duration(700)
        .iterations(1)
        .keyframes([
          {
            offset: 0,
            opacity: '0',
          },
          {
            offset: 0.5,
            opacity: '0.5',
          },
          {
            offset: 1,
            opacity: '1',
          },
        ]);

      animation.play();
    }
  }

   ionViewDidEnter() {
    this.fadeInDashboard();
  }

}
