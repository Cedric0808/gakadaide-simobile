import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
  standalone: false,
})
export class EditProdukPage implements OnInit {
  // Route Params
  id: any = 0;
  selectedProduct: any = null;

  // Field
  edit_name: string = '';
  edit_category: string = '';
  edit_purchasePrice: string = '';
  edit_sellingPrice: string = '';
  edit_stock: string = '';
  edit_image: string = '';

  //Error
  error_name: string = '';
  error_category: string = '';
  error_purchasePrice: string = '';
  error_sellingPrice: string = '';
  error_stock: string = '';

  //Format Regex
  numberPattern = /^[0-9]+$/;

  checkName() {
    if (this.edit_name == '') {
      this.error_name = 'Nama produk wajib diisi';
    } else {
      this.error_name = '';
    }
  }

  checkCategory() {
    if (this.edit_category == '') {
      this.error_category = 'Kategori wajib dipilih';
    } else {
      this.error_category = '';
    }
  }

  checkPurchasePrice() {
    if (this.edit_purchasePrice == '') {
      this.error_purchasePrice = 'Harga beli wajib diisi';
    } else if (!this.numberPattern.test(this.edit_purchasePrice)) {
      this.error_purchasePrice = 'Harga beli harus berupa angka';
    } else if (Number(this.edit_purchasePrice) <= 0) {
      this.error_purchasePrice = 'Harga beli harus lebih dari 0';
    } else {
      this.error_purchasePrice = '';
    }
  }

  checkSellingPrice() {
    if (this.edit_sellingPrice == '') {
      this.error_sellingPrice = 'Harga jual wajib diisi';
    } else if (!this.numberPattern.test(this.edit_sellingPrice)) {
      this.error_sellingPrice = 'Harga jual harus berupa angka';
    } else if (Number(this.edit_sellingPrice) <= 0) {
      this.error_sellingPrice = 'Harga jual harus lebih dari 0';
    } else {
      this.error_sellingPrice = '';
    }
  }

  checkStock() {
    if (this.edit_stock == '') {
      this.error_stock = 'Stok wajib diisi';
    } else if (!this.numberPattern.test(this.edit_stock)) {
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

   submitEdit() {
    this.checkAll();

    if (this.isFormValid()) {
      this.product.updateProduct(
        this.id,
        this.edit_name,
        this.edit_category,

        Number(this.edit_purchasePrice),
        Number(this.edit_sellingPrice),
        Number(this.edit_stock),

        this.edit_image,
      );

      this.router.navigate(['/produk']);
    }
  }

  
  constructor(
    private route: ActivatedRoute,
    private product: Product,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.selectedProduct = this.product.getProductById(this.id);

      if (this.selectedProduct != null) {
        this.edit_name = this.selectedProduct.name;
        this.edit_category = this.selectedProduct.category;
        this.edit_purchasePrice = this.selectedProduct.purchasePrice + '';
        this.edit_sellingPrice = this.selectedProduct.sellingPrice + '';
        this.edit_stock = this.selectedProduct.stock + '';
        this.edit_image = this.selectedProduct.image;
      }
    });
  }
}
