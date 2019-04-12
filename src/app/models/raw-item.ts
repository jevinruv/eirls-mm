import { Supplier } from './supplier';
import { RawItemReorder } from './raw-item-reorder';

export class RawItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    supplier: Supplier = new Supplier();
    rawItemReorder: RawItemReorder = new RawItemReorder();

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = null;
        this.quantity = null;
    }
}