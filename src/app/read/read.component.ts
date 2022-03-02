import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../models/item.model';
import {Observable, of} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, ItemActionType, ItemState} from '../state/product.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent implements OnInit {

  items: Item[] | null = null;
  items$: Observable<ItemState<Item[]>> | null = null;
  item$: Observable<ItemState<Item>> | null = null;

  @Input() submittedItem: Boolean | undefined;

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
  }


  getAllItemsObs() {
    this.items$ = this.itemService.getAll().pipe(
      map(item => ({data: item, state: DataStateTypeEnum.SUCCESS})),
      startWith({state: DataStateTypeEnum.LOADING}),
      catchError(err => of({state: DataStateTypeEnum.ERROR, error: err.message}))
    );
  }


  /*getAllItems() {
    this.itemService.getAll().subscribe((res: any) => {
      this.items = res;
    }, error => {
      console.error(error.message);
    });
  }*/


  switchAvailabilityOfItem(item: Item) {
    this.itemService.updateAvailability(item)
      .subscribe(res => {
          res.available = item.available;
          //this.getAllItemsObs();
        },
        error => {
          console.log(error);
        });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item)
      .subscribe(res => {
          //res = item
          this.getAllItemsObs();
        },
        error => {
          console.log(error);
        });
  }

  /*
  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  */

  onActionEvent($event: ActionEvent) {
    switch ($event.actionType) {
      case ItemActionType.GET_ALL_ITEMS:
        this.getAllItemsObs();
        break;
      case ItemActionType.SWITCH_AVAILABILITY:
        this.switchAvailabilityOfItem($event.payload);
        break;
      case ItemActionType.DELETE_ITEM:
        this.deleteItem($event.payload);
        break;

    }
  }

}
