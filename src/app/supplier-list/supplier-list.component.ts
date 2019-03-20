import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      console.log(data);
    });
  }

}
