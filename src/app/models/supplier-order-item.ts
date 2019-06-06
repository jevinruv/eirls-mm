import { ItemRaw } from './item-raw';

export class SupplierOrderItem {
    id: number;
    quantityOrdered: number;
    quantityReceived: number;
    itemRaw: ItemRaw = new ItemRaw();

    constructor() {
        this.id = null;
        this.quantityOrdered = null;
        this.quantityReceived = null;
    }
}