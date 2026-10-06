import { Service } from '@angular/core';

@Service()
export class Cart {
    cartItems: any[] = [];
    quantityPurchased: number[] = [];

    addToCart(product: any, quantity: number) {
        var found: boolean = false;
        for (var i in this.cartItems) {
            if (this.cartItems[i].id == product.id) {
                this.quantityPurchased[i] += quantity;
                found = true;
            }
        }
        if (!found) {
            this.cartItems.push(product);
            this.quantityPurchased.push(quantity);
        }
    }

    getTotal(): number {
        var total: number = 0;

        for (var i in this.cartItems) {
            total += this.cartItems[i].sellingPrice * this.quantityPurchased[i];
        }

        return total;
    }

    clearCart() {
        while (this.cartItems.length > 0) {
            this.cartItems.pop();
        }
    }

}
