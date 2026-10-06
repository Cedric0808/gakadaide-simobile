import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  products: any[] = [];

  constructor(private product: Product) {}

  ngOnInit() {
    this.products = this.product.products;
  }
}
