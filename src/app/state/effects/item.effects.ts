import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ItemService} from '../../services/item.service';
import * as fromItemAction from '../actions/item.actions';


@Injectable()
export class ItemEffects {

  getAllItemsEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.getAllItemsAction),
        mergeMap(() => this.itemService.getAll()
          .pipe(
            map(
              (items) => (fromItemAction.getAllItemsActionSuccess({items}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );

  deleteItemEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.deleteItemAction),
        mergeMap(({item}) => this.itemService.deleteItem(item)
          .pipe(
            map(
              () => (fromItemAction.deleteItemActionSuccess({item}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );

  switchAvailabilityItemEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.switchItemAvailabilityAction),
        mergeMap(({item}) => this.itemService.updateAvailability(item)
          .pipe(
            map(
              (item) => (fromItemAction.switchItemAvailabilityActionSuccess({item}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );

  createItemEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.createItemAction),
        mergeMap(({item}) => this.itemService.create(item)
          .pipe(
            map(
              (item) => (fromItemAction.createItemActionSuccess({item}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );

  updateItemEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.updateItemAction),
        mergeMap(({item}) => this.itemService.update(item)
          .pipe(
            map(
              (item) => (fromItemAction.updateItemActionSuccess({item}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );

  getItemByIdEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromItemAction.getItemByIdAction),
        mergeMap(({itemId}) => this.itemService.getItemById(itemId)
          .pipe(
            map(
              (item) => (fromItemAction.getItemByIdActionSuccess({item}))
            ),
            catchError(() => EMPTY)
          ))
      )
  );



  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {
  }

}
