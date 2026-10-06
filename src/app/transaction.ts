import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class Transaction {
    transactions: any[] = [];

    products: any[] = [];

    constructor(private product: Product) {
        this.products = this.product.products;
    }

    addTransaction(cartItems: any[], quantityPurchased: number[], total: number) {
        var transactionItems: any[] = [];

        for (var i in cartItems) {
            transactionItems.push({
                id: cartItems[i].id,
                name: cartItems[i].name,
                category: cartItems[i].category,
                sellingPrice: cartItems[i].sellingPrice,
                quantity: quantityPurchased[i]
            });
        }

        const currentDate = new Date();

        const d = currentDate.getDate();
        const m = currentDate.getMonth() + 1;
        const y = currentDate.getFullYear();

        var transactionDate: string = d + '-' + m + '-' + y;

        this.transactions.push({
            id: this.transactions.length + 1,
            date: transactionDate,
            items: transactionItems,
            total: total,
        });
    }

    getTransactionById(id: any): any {
        for (var i in this.transactions) {
            if (this.transactions[i].id == id) {
                return this.transactions[i];
            }
        }

        return null;
    }

    getTodayTransactionCount(): number {
        const currentDate = new Date();

        const d = currentDate.getDate();
        const m = currentDate.getMonth() + 1;
        const y = currentDate.getFullYear();

        var today: string = d + '-' + m + '-' + y;

        var total: number = 0;

        for (var i in this.transactions) {
            if (this.transactions[i].date == today) {
                total++;
            }
        }

        return total;
    }

    getTodayRevenue(): number {
        const currentDate = new Date();

        const d = currentDate.getDate();
        const m = currentDate.getMonth() + 1;
        const y = currentDate.getFullYear();

        var today: string = d + '-' + m + '-' + y;

        var total: number = 0;

        for (var i in this.transactions) {
            if (this.transactions[i].date == today) {
                total += this.transactions[i].total;
            }
        }

        return total;
    }

    getBestSellingProduct(): string {
        if (this.transactions.length == 0) {
            return 'Belum ada';
        }

        var bestProduct: string = 'Belum ada';
        var highestCount: number = 0;

        for (var i in this.products) {
            var count: number = 0;

            for (var j in this.transactions) {
                for (var k in this.transactions[j].items) {
                    if (this.transactions[j].items[k].id == this.products[i].id) {
                        count += this.transactions[j].items[k].quantity;
                    }
                }
            }

            if (count > highestCount) {
                highestCount = count;

                bestProduct = this.products[i].name;
            }
        }

        return bestProduct + " (" + highestCount + " barang)";
    }


}
