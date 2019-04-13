import { Supplier } from './supplier';
import { ItemReorder } from './item-reorder';

export class ItemRaw {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    supplier: Supplier = new Supplier();
    itemRawReorder: ItemReorder = new ItemReorder();

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = null;
        this.quantity = null;
    }
}