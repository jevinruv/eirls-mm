import { Component, OnInit } from '@angular/core';
import { RawItemService } from '../services/raw-item.service';

@Component({
  selector: 'app-raw-item-list',
  templateUrl: './raw-item-list.component.html',
  styleUrls: ['./raw-item-list.component.css']
})
export class RawItemListComponent implements OnInit {

  rawItemList = [];
  filteredRawItemList = [];

  constructor(private rawItemService: RawItemService) { }

  ngOnInit() {

    this.rawItemService.getAll().subscribe(data => {
      console.log(data);
      this.filteredRawItemList = this.rawItemList = data;
    });
  }

  filter(query: string) {
    this.filteredRawItemList = (query) ?
      this.rawItemList.filter(rawItem => rawItem.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.rawItemList;
  }

}
