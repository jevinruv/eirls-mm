import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  isReadOnly = true;
  id: string;
  supplier: Supplier = new Supplier();

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.supplierService.get(this.id).subscribe((data: Supplier) => {
        this.supplier = data;
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  onSubmit() {

    this.supplierService.addOrUpdate(this.supplier).subscribe(data => {
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }

}
