import {createAction, props} from '@ngrx/store';
import {Item} from '../../models/item.model';

export const getAllItemsAction = createAction(
  '[Item] Get all items',
);

export const getAllItemsActionSuccess = createAction(
  '[Item] Get all items success',
  props<{items: Item[]}>()
);

export const createItemAction = createAction(
  '[Item] Create item',
  props<{item: Item}>()
);
export const createItemActionSuccess = createAction(
  '[Item] Create item success',
  props<{item: Item}>()
);
export const switchItemAvailabilityAction = createAction(
  '[Item.available] Switch availability of Item',
  props<{item: Item}>()
);
export const switchItemAvailabilityActionSuccess = createAction(
  '[Item.available] Switch availability of Item success',
  props<{item: Item}>()
);

export const deleteItemAction = createAction(
  '[Item] Delete the specified Item',
  props<{item: Item}>()
);
export const deleteItemActionSuccess = createAction(
  '[Item] Delete the specified Item success',
  props<{item: Item}>()
);


export const updateItemAction = createAction(
  '[Item] Update the specified Item',
  props<{item: Item}>()
);
export const updateItemActionSuccess = createAction(
  '[Item] Update the specified Item success',
  props<{item: Item}>()
);

export const getItemByIdAction = createAction(
  '[Item] Get item by id',
  props<{itemId: number}>()
);

export const getItemByIdActionSuccess = createAction(
  '[Item] Get item by id success',
  props<{item: Item}>()
);
