import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  transactions: any[] = [];

  constructor(private transaction: Transaction) {}

  refreshData() {
    this.transactions = this.transaction.transactions;
  }

  ngOnInit() {
    this.refreshData()
  }

}
