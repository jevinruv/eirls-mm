import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { ItemRaw } from '../models/item-raw';
import { ItemRawService } from '../services/item-raw.service';

@Component({
  selector: 'app-item-raw-details',
  templateUrl: './item-raw-details.component.html',
  styleUrls: ['./item-raw-details.component.css']
})
export class ItemRawDetailsComponent implements OnInit {

  itemRaw: ItemRaw = new ItemRaw();
  supplierList: Supplier[] = [];

  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private itemRawService: ItemRawService,
    private supplierService: SupplierService

  ) { }

  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      this.supplierList = data;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.itemRawService.get(this.id).subscribe(data => {
        this.itemRaw = data;
        console.log(data)
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

    this.itemRawService.addOrUpdate(this.itemRaw).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

}
