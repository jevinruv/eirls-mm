import { SupplierContact } from './supplier-contact';
import { ItemRaw } from './item-raw';

export class Supplier {
    id: number;
    name: string;
    status: string;
    leadTime: number;
    supplierContact: SupplierContact = new SupplierContact();
    itemsRaw: ItemRaw[] = [];

    constructor() {
        this.id = null;
        this.name = null;
        this.status = null;
        this.leadTime = null;
    }
}