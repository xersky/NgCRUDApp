import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from '../../models/item.model';


@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
  styleUrls: ['./read-items.component.css']
})
export class ReadItemsComponent implements OnInit {

  @Input() items: Item[] | null = null;
  @Output() newItemAvailabilityEvent = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }

  updateItem(item: Item) {
    this.newItemAvailabilityEvent.emit(item);
  }

}
