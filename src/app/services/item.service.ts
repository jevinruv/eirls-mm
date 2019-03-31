import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  API_URL = "/api/items";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Item[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<Item>(this.API_URL + `/${id}`);
  }

  addOrUpdate(supplier) {
    return this.http.post(this.API_URL, supplier);
  }

}
