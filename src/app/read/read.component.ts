import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../models/item.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getAllItems} from '../state/reducers/item.reducer';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent implements OnInit {

  items$: Observable<Item[]> | null = null;

  constructor(private itemService: ItemService, private store: Store) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select(getAllItems);
  }

}
