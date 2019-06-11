import { ItemRaw } from './item-raw';
import { ItemComplete } from './item-complete';

export class SalesOrderItem {
    id: number;
    quantity: number;
    itemRaw: ItemRaw = new ItemRaw();
    itemComplete: ItemComplete = new ItemComplete();

    constructor() {
        this.id = null;
        this.quantity = null;
    }
}