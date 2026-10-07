import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {
  // Variabel Input
  new_name: string = '';
  new_category: string = '';
  new_purchasePrice: string = '';
  new_sellingPrice: string = '';
  new_stock: string = '';
  new_image: string = '';

  // Variabel Error Message
  error_name: string = '';
  error_category: string = '';
  error_purchasePrice: string = '';
  error_sellingPrice: string = '';
  error_stock: string = '';

  //Number Pattern
  numberPattern = /^[0-9]+$/;

  checkName() {
    if (this.new_name == '') {
      this.error_name = 'Nama produk wajib diisi';
    } else {
      this.error_name = '';
    }
  }

  checkCategory() {
    if (this.new_category == '') {
      this.error_category = 'Kategori wajib dipilih';
    } else {
      this.error_category = '';
    }
  }

  checkPurchasePrice() {
    if (this.new_purchasePrice == '') {
      this.error_purchasePrice = 'Harga beli wajib diisi';
    } else if (!this.numberPattern.test(this.new_purchasePrice)) {
      this.error_purchasePrice = 'Harga beli harus berupa angka';
    } else if (Number(this.new_purchasePrice) <= 0) {
      this.error_purchasePrice = 'Harga beli harus lebih dari 0';
    } else {
      this.error_purchasePrice = '';
    }
  }

  checkSellingPrice() {
    if (this.new_sellingPrice == '') {
      this.error_sellingPrice = 'Harga jual wajib diisi';
    } else if (!this.numberPattern.test(this.new_sellingPrice)) {
      this.error_sellingPrice = 'Harga jual harus berupa angka';
    } else if (Number(this.new_sellingPrice) <= 0) {
      this.error_sellingPrice = 'Harga jual harus lebih dari 0';
    } else {
      this.error_sellingPrice = '';
    }
  }

  checkStock() {
    if (this.new_stock == '') {
      this.error_stock = 'Stok wajib diisi';
    } else if (!this.numberPattern.test(this.new_stock)) {
      this.error_stock = 'Stok harus berupa angka dan tidak boleh negatif';
    } else {
      this.error_stock = '';
    }
  }

  checkAll() {
    this.checkName();
    this.checkCategory();
    this.checkPurchasePrice();
    this.checkSellingPrice();
    this.checkStock();
  }

  isFormValid(): boolean {
    if (
      this.error_name == '' &&
      this.error_category == '' &&
      this.error_purchasePrice == '' &&
      this.error_sellingPrice == '' &&
      this.error_stock == ''
    ) {
      return true;
    }
    return false;
  }

  submitProduct() {
    this.checkAll();
    console.log('checkall')

    if (this.isFormValid()) {
      console.log('valid')
      this.product.addProduct(
        this.new_name,
        this.new_category,
        Number(this.new_purchasePrice),
        Number(this.new_sellingPrice),
        Number(this.new_stock),
        this.new_image,
      );
    }
  }

  constructor(private product: Product) {}

  ngOnInit() {}
}
