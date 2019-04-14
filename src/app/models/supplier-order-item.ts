import { ItemRaw } from './item-raw';

export class SupplierOrderItem {
    id: number;
    quantity: number;
    supplier: ItemRaw = new ItemRaw();

    constructor() {
        this.id = null;
        this.quantity = null;
    }
}