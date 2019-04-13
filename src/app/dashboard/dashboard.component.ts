import { Component, OnInit } from '@angular/core';
import { ItemRawService } from '../services/item-raw.service';
import { ItemCompleteService } from '../services/item-complete.service';
import { ItemRaw } from '../models/item-raw';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemRawList: ItemRaw[];

  constructor(
    private itemRawService: ItemRawService,
    private itemCompleteService: ItemCompleteService,
  ) { }

  ngOnInit() {

    this.itemRawService.getAllLowQuantity().subscribe(data => {
      console.log(data);
      this.itemRawList = data;
    });

  }

}
