import { Component, OnInit } from '@angular/core';
import { SupplierOrderService } from '../services/supplier-order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-order-list',
  templateUrl: './supplier-order-list.component.html',
  styleUrls: ['./supplier-order-list.component.css']
})
export class SupplierOrderListComponent implements OnInit {

  supplierOrderList = [];
  filteredSupplierOrderList = [];
  selectedStatus: string;

  constructor(
    private supplierOrderService: SupplierOrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.supplierOrderService.getAll().subscribe(data => {
      // console.log(data);
      this.filteredSupplierOrderList = this.supplierOrderList = data;
    });

    this.viewByStatus();

  }

  filter(query: string) {
    this.filteredSupplierOrderList = (query) ?
      this.supplierOrderList.filter(rawItem => rawItem.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.supplierOrderList;
  }

  viewByStatus() {

    this.route.queryParamMap.subscribe(params => {
      this.selectedStatus = params.get('status');

      console.log(this.selectedStatus);

      if (this.selectedStatus == 'added') {
        this.supplierOrderService.getAllAdded().subscribe(data => {
          this.filteredSupplierOrderList = data;
        });
      }
      else if (this.selectedStatus == 'sent') {
        this.supplierOrderService.getAllSent().subscribe(data => {
          this.filteredSupplierOrderList = data;
        });
      }
      else if (this.selectedStatus == 'received') {

        this.supplierOrderService.getAllReceived().subscribe(data => {
          this.filteredSupplierOrderList = data;
        });
      }
      else {
        this.filteredSupplierOrderList = this.supplierOrderList;
      }

    });

  }

}
