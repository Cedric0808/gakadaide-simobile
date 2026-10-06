import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products: any[] = [
    {
      id: 1,
      name: 'beras premium 5 kg',
      category: 'Sembako',
      purchasePrice: 62000,
      sellingPrice: 70000,
      stock: 12,
      image: 'assets/products/beras.png',
    },
    {
      id: 2,
      name: 'minyak goreng 600 ml',
      category: 'Sembako',
      purchasePrice: 16000,
      sellingPrice: 19000,
      stock: 20,
      image: 'assets/products/minyak.png',
    },
    {
      id: 3,
      name: 'gula pasir 1 kg',
      category: 'Sembako',
      purchasePrice: 14000,
      sellingPrice: 17000,
      stock: 0,
      image: 'assets/products/gula.png',
    },
    {
      id: 4,
      name: 'mi instan goreng',
      category: 'Makanan',
      purchasePrice: 2800,
      sellingPrice: 3500,
      stock: 35,
      image: 'assets/products/mi.png',
    },
    {
      id: 5,
      name: 'biskuit cokelat',
      category: 'Makanan',
      purchasePrice: 7000,
      sellingPrice: 9000,
      stock: 8,
      image: 'assets/products/biskuit.png',
    },
    {
      id: 6,
      name: 'air mineral 600 ml',
      category: 'Minuman',
      purchasePrice: 2500,
      sellingPrice: 3500,
      stock: 24,
      image: 'assets/products/air.png',
    },
    {
      id: 7,
      name: 'teh botol 350 ml',
      category: 'Minuman',
      purchasePrice: 4000,
      sellingPrice: 5500,
      stock: 0,
      image: 'assets/products/teh.png',
    },
    {
      id: 8,
      name: 'sabun mandi',
      category: 'Kebutuhan Rumah',
      purchasePrice: 3500,
      sellingPrice: 5000,
      stock: 15,
      image: 'assets/products/sabun.png',
    },
    {
      id: 9,
      name: 'detergen 800 gr',
      category: 'Kebutuhan Rumah',
      purchasePrice: 18000,
      sellingPrice: 22000,
      stock: 7,
      image: '',
    },
    {
      id: 10,
      name: 'pasta gigi 190 gr',
      category: 'Kebutuhan Rumah',
      purchasePrice: 12000,
      sellingPrice: 15000,
      stock: 10,
      image: '',
    },
  ];

  constructor() { }

  getProductById(id: any): any {
    for (var i: number = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }

    return null;
  }

  reduceStock(cartItems: any[], quantityPurchased: number[]) {
    for (var i in cartItems) {
      for (var j in this.products) {
        if (this.products[j].id == cartItems[i].id) {
          if (this.products[j].stock > 0) {
            this.products[j].stock -= quantityPurchased[i];
          }
          break;
        }
      }
    }
  }

  getProductCount(): number {
    return this.products.length;
  }

}
