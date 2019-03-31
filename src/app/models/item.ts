import { Supplier } from './supplier';

export class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    supplier: Supplier = new Supplier();

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = null;
        this.quantity = null;
    }
}