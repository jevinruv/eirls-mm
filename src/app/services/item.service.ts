import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  API_URL = "/items";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.API_URL);
  }

}
