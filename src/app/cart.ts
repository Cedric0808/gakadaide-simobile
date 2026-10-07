import { Service } from '@angular/core';

@Service()
export class Cart {
    cartItems: any[] = [];
    quantityPurchased: number[] = [];

    addToCart(product: any, quantity: number): boolean {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id == product.id) {
                if (this.quantityPurchased[i] + quantity <= product.stock) {
                    this.quantityPurchased[i] += quantity;
                    return true;
                }
                return false;
            }
        }
        if (quantity <= product.stock) {
            this.cartItems.push(product);
            this.quantityPurchased.push(quantity);
            return true;
        }
        return false;
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
            this.cartItems.pop()
        }
        while (this.quantityPurchased.length > 0) {
            this.quantityPurchased.pop()
        }
    }

}
