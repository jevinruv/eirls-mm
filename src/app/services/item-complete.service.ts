import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemComplete } from '../models/item-complete';

@Injectable({
  providedIn: 'root'
})
export class ItemCompleteService {

  API_URL = "/api/items-complete";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ItemComplete[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<ItemComplete>(this.API_URL + `/${id}`);
  }

  addOrUpdate(completeItem) {
    return this.http.post(this.API_URL, completeItem);
  }

}
