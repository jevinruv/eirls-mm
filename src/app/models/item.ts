import { Supplier } from './supplier';
import { ItemReorder } from './item-reorder';

export class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    supplier: Supplier = new Supplier();
    itemReorder: ItemReorder = new ItemReorder();

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = null;
        this.quantity = null;
    }
}