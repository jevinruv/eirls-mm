import { SupplierContact } from './supplier-contact';

export class Supplier {
    id: number;
    name: string;
    status: string;
    leadTime: number;
    supplierContact: SupplierContact = new SupplierContact();

    constructor() {
        this.id = null;
        this.name = null;
        this.status = null;
        this.leadTime = null;
    }
}