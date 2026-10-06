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

  searchText: string = '';

  constructor(private product: Product) {}

  ngOnInit() {
    this.products = this.product.products;
  }

  isProductMatch(productName: string): boolean {
    if (this.searchText == '') {
      return true;
    }

    if (this.searchText.length > productName.length) {
      return false;
    }

    for (
      var i: number = 0;
      i <= productName.length - this.searchText.length;
      i++
    ) {
      var same: boolean = true;

      for (var j: number = 0; j < this.searchText.length; j++) {
        if (productName[i + j] != this.searchText[j]) {
          same = false;
          break;
        }
      }

      if (same) {
        return true;
      }
    }

    return false;
  }
}