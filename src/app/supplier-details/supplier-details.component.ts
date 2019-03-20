import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  supplier = {
    id: 12,
    name: "poo",
    email: "mal@ll.com"
  };
  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.isReadOnly = false;
    }
  }

}
