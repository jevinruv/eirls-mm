import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesOrder } from '../models/sales-order.';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {

  API_URL = "/api/sales-orders";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<SalesOrder[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<SalesOrder>(this.API_URL + `/${id}`);
  }

  addOrUpdate(salesOrder) {
    return this.http.post(this.API_URL, salesOrder);
  }
}
