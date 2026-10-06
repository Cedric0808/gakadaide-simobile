import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Cart } from '../cart';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  id: any = 0;

  detailProduct: any = null;

  message: string = '';

  quantityPurchased: string = "";

  error: string = "";

  numberPattern = /^[0-9]+$/;

  constructor(
    private route: ActivatedRoute,
    private product: Product,
    private cart: Cart
  ) { }

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

  addToCart() {
    if (this.error == "") {
      this.cart.addToCart(this.detailProduct, Number(this.quantityPurchased));
      this.message = 'Produk berhasil ditambahkan ke keranjang';
    }
  }

  checkQuantity() {
    if (!this.numberPattern.test(this.quantityPurchased)) {
      this.error = 'Jumlah produk harus berupa angka';
    } else if (Number(this.quantityPurchased) <= 0) {
      this.error = 'Jumlah produk harus lebih dari 0';
    } else if (this.detailProduct.stock < Number(this.quantityPurchased)) {
      this.error = 'Stock produk tidak cukup';
    } else {
      this.error = '';
    }
  }
}
