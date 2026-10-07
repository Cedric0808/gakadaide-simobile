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
  ) { }

  productCount: Number = 0

  transactionCount: Number = 0

  todayRevenue: Number = 0;

  bestSellingProduct: string = "Belum ada"

  refreshData() {
    this.productCount = this.product.getProductCount();
    this.transactionCount = this.transaction.getTodayTransactionCount();
    this.todayRevenue = this.transaction.getTodayRevenue();
    this.bestSellingProduct = this.transaction.getBestSellingProduct();
  }

  ngOnInit() {
    this.refreshData()
  }

  fadeInDashboard() {
    const dashboardElement = document.querySelector(
      '#dashboardAnimation',
    ) as HTMLElement;

    if (dashboardElement != null) {
      const animation = this.animationCtrl
        .create()
        .addElement(dashboardElement)
        .duration(1000)
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
