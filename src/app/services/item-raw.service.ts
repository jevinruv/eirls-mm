import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemRaw } from '../models/item-raw';

@Injectable({
  providedIn: 'root'
})
export class ItemRawService {

  API_URL = "/api/items-raw";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ItemRaw[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<ItemRaw>(this.API_URL + `/${id}`);
  }

  getAllLowQuantity() {
    return this.http.get<ItemRaw[]>(this.API_URL + "/low-quantity");
  }

  addOrUpdate(rawItem) {
    return this.http.post(this.API_URL, rawItem);
  }

}
