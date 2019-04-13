import { Component, OnInit } from '@angular/core';
import { ItemRawService } from '../services/item-raw.service';

@Component({
  selector: 'app-item-raw-list',
  templateUrl: './item-raw-list.component.html',
  styleUrls: ['./item-raw-list.component.css']
})
export class ItemRawListComponent implements OnInit {

  itemRawList = [];
  filteredItemRawList = [];

  constructor(private itemRawService: ItemRawService) { }

  ngOnInit() {

    this.itemRawService.getAll().subscribe(data => {
      console.log(data);
      this.filteredItemRawList = this.itemRawList = data;
    });
  }

  filter(query: string) {
    this.filteredItemRawList = (query) ?
      this.itemRawList.filter(rawItem => rawItem.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.itemRawList;
  }

}
