import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesOrder } from '../models/sales-order.';
import { SalesOrderService } from '../services/sales-order.service';

@Component({
  selector: 'app-sales-order-detail',
  templateUrl: './sales-order-detail.component.html',
  styleUrls: ['./sales-order-detail.component.css']
})
export class SalesOrderDetailComponent implements OnInit {

  itemRaw: SalesOrder = new SalesOrder();

  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private salesOrderService: SalesOrderService

  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.salesOrderService.get(this.id).subscribe(data => {
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

    this.salesOrderService.addOrUpdate(this.itemRaw).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

}
