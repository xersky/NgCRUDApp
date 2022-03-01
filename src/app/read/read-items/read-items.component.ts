import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';
import {Observable} from 'rxjs';
import {ItemState} from '../../state/product.state';


@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
  styleUrls: ['./read-items.component.css']
})
export class ReadItemsComponent implements OnInit {

  //@Input() items: Observable<ItemState<Item[]>>| null = null;
  @Input() items: Item[] | null = null;
  @Output() newItemAvailabilityEvent = new EventEmitter<Item>();


  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  updateItem(item: Item) {
    this.newItemAvailabilityEvent.emit(item);
  }

}
