import { ItemReorder } from './item-reorder';

export class ItemComplete {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    itemCompleteReorder: ItemReorder = new ItemReorder();

    constructor() {
        this.id = null;
        this.name = null;
        this.description = null;
        this.price = null;
        this.quantity = null;
    }
}