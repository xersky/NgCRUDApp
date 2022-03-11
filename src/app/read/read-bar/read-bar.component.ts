import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import * as fromItemActions from '../../state/actions/item.actions';
import {Store} from '@ngrx/store';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-read-bar',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarComponent implements OnInit {


  constructor(private eventService: EventService, private store: Store<Item>) {
  }

  ngOnInit(): void {
  }

  getAllItems() {
    this.store.dispatch(fromItemActions.getAllItemsAction());
  }

}
