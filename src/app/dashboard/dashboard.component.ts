import { Component, OnInit } from '@angular/core';
import { ItemRawService } from '../services/item-raw.service';
import { ItemCompleteService } from '../services/item-complete.service';
import { ItemRaw } from '../models/item-raw';
import { SupplierOrderService } from '../services/supplier-order.service';
import { SupplierOrder } from '../models/supplier-order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemRawList: ItemRaw[];
  supplierOrderList: SupplierOrder[];

  constructor(
    private itemRawService: ItemRawService,
    private itemCompleteService: ItemCompleteService,
    private supplierOrderService: SupplierOrderService,
  ) { }

  ngOnInit() {

    this.itemRawService.getAllLowQuantity().subscribe(data => {
      // console.log(data);
      this.itemRawList = data;
    });

    this.supplierOrderService.getAll().subscribe(data => {
      console.log(data);
      this.supplierOrderList = data;
    });

  }

}
