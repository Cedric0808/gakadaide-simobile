import { Service } from '@angular/core';

@Service()
export class Transaction {
    transactions: any[] = [];

    constructor() { }

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
}
