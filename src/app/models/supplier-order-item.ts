import { ItemRaw } from './item-raw';

export class SupplierOrderItem {
    id: number;
    quantity: number;
    itemRaw: ItemRaw = new ItemRaw();

    constructor() {
        this.id = null;
        this.quantity = null;
    }
}