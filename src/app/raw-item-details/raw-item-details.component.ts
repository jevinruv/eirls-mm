import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { RawItem } from '../models/raw-item';
import { RawItemService } from '../services/raw-item.service';

@Component({
  selector: 'app-raw-item-details',
  templateUrl: './raw-item-details.component.html',
  styleUrls: ['./raw-item-details.component.css']
})
export class RawItemDetailsComponent implements OnInit {

  rawItem: RawItem = new RawItem();
  supplierList: Supplier[] = [];

  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private rawItemService: RawItemService,
    private supplierService: SupplierService

  ) { }

  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      this.supplierList = data;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.rawItemService.get(this.id).subscribe(data => {
        this.rawItem = data;
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

    this.rawItemService.addOrUpdate(this.rawItem).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

}
