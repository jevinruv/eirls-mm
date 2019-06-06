import { Component, OnInit } from '@angular/core';
import { SupplierOrderService } from '../services/supplier-order.service';

@Component({
  selector: 'app-supplier-order-list',
  templateUrl: './supplier-order-list.component.html',
  styleUrls: ['./supplier-order-list.component.css']
})
export class SupplierOrderListComponent implements OnInit {

  supplierOrderList = [];
  filteredSupplierOrderList = [];

  constructor(private supplierOrderService: SupplierOrderService) { }

  ngOnInit() {

    this.supplierOrderService.getAll().subscribe(data => {
      console.log(data);
      this.filteredSupplierOrderList = this.supplierOrderList = data;
    });
  }

  filter(query: string) {
    this.filteredSupplierOrderList = (query) ?
      this.supplierOrderList.filter(rawItem => rawItem.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.supplierOrderList;
  }

}
