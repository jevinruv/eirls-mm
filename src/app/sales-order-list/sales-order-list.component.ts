import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../services/sales-order.service';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {

  salesOrderList = [];
  filteredSalesOrderList = [];

  constructor(private salesOrderService: SalesOrderService) { }

  ngOnInit() {

    this.salesOrderService.getAll().subscribe(data => {
      console.log(data);
      this.filteredSalesOrderList = this.salesOrderList = data;
    });
  }

  // filter(query: string) {
  //   this.filteredSalesOrderList = (query) ?
  //     this.salesOrderList.filter(salesOrder => salesOrder.id.includes(query.toLocaleLowerCase())) :
  //     this.salesOrderList;
  // }

}
