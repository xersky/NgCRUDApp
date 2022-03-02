import {Component, OnInit, Input} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent implements OnInit {

  items: Item[] | null = null;

  @Input() submittedItem: Boolean | undefined;

  constructor(private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.getAllItems()
  }


  getAllItems() {
    this.itemService.getAll().subscribe((res: any) => {
      this.items = res;
    }, error => {
      console.error(error.message);
    });
  }

  switchAvailabilityOfItem(item: Item) {
    item.available = !item.available;
    this.itemService.update(item, item.id)
      .subscribe(res => {
        },
        error => {
          console.log(error.message);
        });
  }


}
