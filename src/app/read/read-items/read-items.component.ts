import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EventService} from '../../services/event.service';
import * as fromItemActions from '../../state/actions/item.actions';

@Component({
  selector: 'app-read-items',
  templateUrl: './read-items.component.html',
  styleUrls: ['./read-items.component.css']
})
export class ReadItemsComponent implements OnInit {

  @Input() items$: Observable<Item[]> | null = null;

  constructor(private eventService: EventService, private store: Store) {
  }

  ngOnInit(): void {
  }

  switchAvailabilityItem(item: Item) {
    this.store.dispatch(fromItemActions.switchItemAvailabilityAction({item}));
  }

  deleteItem(item: Item) {
    this.store.dispatch(fromItemActions.deleteItemAction({item}));
  }

}
