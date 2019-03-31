import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = {};
  supplierList: Supplier[] = [];

  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private supplierService: SupplierService

  ) { }

  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      this.supplierList = data;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.itemService.get(this.id).subscribe(data => {
        this.item = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  compareByOptionId(idFirst, idSecond) {
    return idFirst && idSecond && idFirst.id == idSecond.id;
  }

  onSubmit() {

    this.itemService.addOrUpdate(this.item).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

}
