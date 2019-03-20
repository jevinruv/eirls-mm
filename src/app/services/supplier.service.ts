import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  API_URL = "/api/suppliers";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Supplier[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<Supplier>(this.API_URL + `/${id}`);
  }

  addOrUpdate(supplier) {
    return this.http.post(this.API_URL, supplier);
  }

}
