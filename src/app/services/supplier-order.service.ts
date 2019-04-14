import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupplierOrder } from '../models/supplier-order';

@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService {

  API_URL = "/api/supplier-orders";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SupplierOrder[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<SupplierOrder>(this.API_URL + `/${id}`);
  }

  newSupplierOrder() {
    return this.http.get<SupplierOrder>(this.API_URL + '/new');
  }
  addOrUpdate(supplierOrder) {
    return this.http.post(this.API_URL, supplierOrder);
  }
}
