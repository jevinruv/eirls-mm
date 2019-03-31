export interface Supplier {
    id?: number,
    name?: string,
    status?: string,
    leadTime?: number,
    supplierContact?: {
        email: string,
        phone: string,
        address: string
    }
}