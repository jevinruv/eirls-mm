import { Component, OnInit } from '@angular/core';
import { ItemCompleteService } from '../services/item-complete.service';

@Component({
  selector: 'app-item-complete-list',
  templateUrl: './item-complete-list.component.html',
  styleUrls: ['./item-complete-list.component.css']
})
export class ItemCompleteListComponent implements OnInit {

  itemCompleteList = [];
  filteredItemCompleteList = [];

  constructor(private itemCompleteService: ItemCompleteService) { }

  ngOnInit() {

    this.itemCompleteService.getAll().subscribe(data => {
      // console.log(data);
      this.filteredItemCompleteList = this.itemCompleteList = data;
    });
  }

  filter(query: string) {
    this.filteredItemCompleteList = (query) ?
      this.itemCompleteList.filter(rawItem => rawItem.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.itemCompleteList;
  }

}
