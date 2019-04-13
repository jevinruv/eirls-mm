import { Component, OnInit } from '@angular/core';
import { ItemComplete } from '../models/item-complete';
import { ActivatedRoute } from '@angular/router';
import { ItemCompleteService } from '../services/item-complete.service';

@Component({
  selector: 'app-item-complete-details',
  templateUrl: './item-complete-details.component.html',
  styleUrls: ['./item-complete-details.component.css']
})
export class ItemCompleteDetailsComponent implements OnInit {

  itemComplete: ItemComplete = new ItemComplete();
  isReadOnly = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private completeItemService: ItemCompleteService

  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.completeItemService.get(this.id).subscribe(data => {
        this.itemComplete = data;
        // console.log(data)
      });
    }
    else {
      this.isReadOnly = false;
    }
  }

  onSubmit() {

    this.completeItemService.addOrUpdate(this.itemComplete).subscribe(data => {
      // console.log(data);
      this.isReadOnly = true;
    });
  }

  edit() {
    this.isReadOnly = false;
  }


}
