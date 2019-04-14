import { Component, OnInit } from '@angular/core';
import { SupplierOrderService } from '../services/supplier-order.service';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier';
import { SupplierOrder } from '../models/supplier-order';
import { ActivatedRoute } from '@angular/router';
import { SupplierOrderItem } from '../models/supplier-order-item';

@Component({
  selector: 'app-supplier-order-detail',
  templateUrl: './supplier-order-detail.component.html',
  styleUrls: ['./supplier-order-detail.component.css']
})
export class SupplierOrderDetailComponent implements OnInit {

  private newSupplierOrderItem: SupplierOrderItem = new SupplierOrderItem();
  private supplierList: Supplier[] = [];
  private supplierOrder: SupplierOrder = new SupplierOrder();
  private selectedSupplier: Supplier = new Supplier();

  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private supplierOrderService: SupplierOrderService,
    private supplierService: SupplierService
  ) { }


  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      // console.log(data);
      this.supplierList = data;
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.supplierOrderService.get(this.id).subscribe(data => {
        // console.log(data)
        this.supplierOrder = data;
        this.selectedSupplier = this.supplierOrder.supplier;
      });
    }
    else {
      this.isReadOnly = false;

      this.supplierOrderService.newSupplierOrder().subscribe(data => {
        console.log(data)
        this.supplierOrder = data;
      });
    }
  }

  onChangeSupplier(supplier) {
    // console.log(supplier);
    this.selectedSupplier = supplier;
    this.supplierOrder.supplierOrderItems = [];
  }

  onSubmit() {
    // console.log(this.supplierOrder);

    let supplierFormList = [];

    this.supplierOrder.supplierOrderItems.forEach(item => {

      let supplierOrderForm = {
        supplierOrderId: this.supplierOrder.id,
        itemRawId: item.itemRaw.id,
        quantity: item.quantity
      };
      supplierFormList.push(supplierOrderForm);

    });

    console.log(supplierFormList);

    this.supplierOrderService.addOrUpdate(supplierFormList).subscribe(data => {
      console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

  compareByOptionId(idFirst, idSecond) {
    return idFirst && idSecond && idFirst.id == idSecond.id;
  }

  addFieldValue() {
    // console.log(this.newSupplierOrderItem);

    if (this.newSupplierOrderItem.itemRaw.id && this.newSupplierOrderItem.quantity) {
      this.supplierOrder.supplierOrderItems.push(this.newSupplierOrderItem)
      this.newSupplierOrderItem = new SupplierOrderItem();
    }

  }

  deleteFieldValue(index) {
    this.supplierOrder.supplierOrderItems.splice(index, 1);
  }
}
