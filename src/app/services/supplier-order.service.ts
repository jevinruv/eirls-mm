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

  getAllReceived() {
    return this.http.get<SupplierOrder[]>(this.API_URL + '/received');
  }

  getAllSent() {
    return this.http.get<SupplierOrder[]>(this.API_URL + '/sent');
  }

  getAllAdded() {
    return this.http.get<SupplierOrder[]>(this.API_URL + '/added');
  }

  get(id) {
    return this.http.get<SupplierOrder>(this.API_URL + `/${id}`);
  }

  addOrUpdate(supplierOrder) {
    return this.http.post(this.API_URL, supplierOrder);
  }
}
