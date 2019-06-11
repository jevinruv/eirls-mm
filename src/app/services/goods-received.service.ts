import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupplierOrder } from '../models/supplier-order';

@Injectable({
  providedIn: 'root'
})
export class GoodsReceivedService {

  API_URL = "/api/goods-received";

  constructor(private http: HttpClient) { }

  add(id) {
    return this.http.get<SupplierOrder>(this.API_URL + `/add-stock/${id}`);
  }

}
