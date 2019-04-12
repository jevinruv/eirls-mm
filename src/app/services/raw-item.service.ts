import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawItem } from '../models/raw-item';

@Injectable({
  providedIn: 'root'
})
export class RawItemService {

  API_URL = "/api/raw-items";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RawItem[]>(this.API_URL);
  }

  get(id) {
    return this.http.get<RawItem>(this.API_URL + `/${id}`);
  }

  addOrUpdate(rawItem) {
    return this.http.post(this.API_URL, rawItem);
  }

}
