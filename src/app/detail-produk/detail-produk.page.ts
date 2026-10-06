import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  id: any = 0;

  detailProduct: any = null;

  constructor(
    private route: ActivatedRoute,
    private product: Product,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.detailProduct = this.product.getProductById(this.id);
    });
  }

  getProductImage(): string {
    if (this.detailProduct.image == '') {
      return 'assets/products/default.png';
    }

    return this.detailProduct.image;
  }
}
