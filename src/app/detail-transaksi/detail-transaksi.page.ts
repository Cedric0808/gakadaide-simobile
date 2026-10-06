import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
  standalone: false,
})
export class DetailTransaksiPage implements OnInit {
  id: any = 0;

  detailTransaction: any = null;

  constructor(
    private route: ActivatedRoute,
    private transaction: Transaction,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.detailTransaction = this.transaction.getTransactionById(this.id);
    });
  }

}
