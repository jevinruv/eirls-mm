import { Supplier } from './supplier';
import { SupplierOrderItem } from './supplier-order-item';

export class SupplierOrder {
    id: number;
    status: string;
    createdDate: Date;
    supplier: Supplier = new Supplier();
    supplierOrderItems: SupplierOrderItem[] = [];

    constructor() {
        this.id = null;
        this.status = null;
        this.createdDate = null;
    }
}