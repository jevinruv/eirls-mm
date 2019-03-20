import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  supplierList = [];
  filteredSupplierList = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {

    this.supplierService.getAll().subscribe(data => {
      console.log(data);
      this.filteredSupplierList = this.supplierList = data;
    });
  }

  filter(query: string) {
    this.filteredSupplierList = (query) ?
      this.supplierList.filter(supplier => supplier.name.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.supplierList;
  }

}
