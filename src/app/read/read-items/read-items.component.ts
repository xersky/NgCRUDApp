import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../models/item.model';
import {Observable} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, ItemActionType, ItemState} from '../../state/product.state';


@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
  styleUrls: ['./read-items.component.css']
})
export class ReadItemsComponent implements OnInit {

  @Input() items$: Observable<ItemState<Item[]>>| null = null;
  @Output() newItemAvailabilityEvent: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  @Output() deleteItemEvent: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  readonly dataStateTypeEnum = DataStateTypeEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateItem(item: Item) {
    this.newItemAvailabilityEvent.emit({actionType: ItemActionType.SWITCH_AVAILABILITY, payload: item});
  }

  deleteItem(item: Item){
    this.deleteItemEvent.emit({actionType: ItemActionType.DELETE_ITEM, payload: item})
  }

}
