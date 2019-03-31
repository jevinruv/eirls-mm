export class SupplierContact {
    id: number;
    phone: string;
    email: string;
    locationCollection: string;
    locationDelivery: string;
    locationMain: string;

    constructor() {
        this.id = null;
        this.phone = null;
        this.email = null;
        this.locationCollection = null;
        this.locationDelivery = null;
        this.locationMain = null;
    }
}