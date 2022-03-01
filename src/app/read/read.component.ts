import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../models/item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ActionEvent, DataStateTypeEnum, ItemActionsType, ItemState} from '../state/product.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {error} from 'protractor';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent implements OnInit {

  items: Item[] | null = null;
  items$: Observable<ItemState<Item[]>> | null = null;

  @Input() submittedItem: Boolean | undefined;

  constructor(private itemService: ItemService) {
  }


  ngOnInit(): void {
    this.getAllItems()
  }

  /*
  getAllItemsObs() {
    //this.items$ = this.itemService.getAll();
    this.items$ = this.itemService.getAll().pipe(
      map(item =>({data:item,state:DataStateTypeEnum.SUCCESS})),
      startWith({state : DataStateTypeEnum.LOADING}),
      catchError(err=> err.of({state : DataStateTypeEnum.ERROR, error: err.message}))
    )

  }
   */

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
          console.log(error);
        });
  }

  /*
  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  */
  /*
  onActionEvent($event: ActionEvent) {
   console.log($event)
   switch ($event.actionType) {
     case ItemActionsType.GET_ALL_ITEMS:
       this.getAllItemsObs();
   }
  }
   */

}
