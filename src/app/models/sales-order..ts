import { SalesOrderItem } from './sales-order-item';

export class SalesOrder {
    id: number;
    salesOrderId: number;
    status: string;
    createdDate: Date;
    salesOrderItems: SalesOrderItem[] = [];

    constructor() {
        this.id = null;
        this.status = null;
        this.createdDate = null;
    }
}