import {createAction, props} from '@ngrx/store';
import {Item} from '../../models/item.model';

export enum itemActionType {

  GET_ALL_ITEMS = "[Item] Get all items",
  GET_ALL_ITEMS_SUCCESS = "[Item] Get all items success",
  CREATE_ITEM = "[Item] Create item",
  CREATE_ITEM_SUCCESS = "[Item] Create item success",
  SWITCH_ITEM_AVAILABILITY = "[Item.available] Switch availability of Item",
  SWITCH_ITEM_AVAILABILITY_SUCCESS = "[Item.available] Switch availability of Item success",
  DELETE_ITEM = "[Item] Delete the specified Item",
  DELETE_ITEM_SUCCESS = "[Item] Delete the specified Item success",
  UPDATE_ITEM = "[Item] Update the specified Item",
  UPDATE_ITEM_SUCCESS = "[Item] Update the specified Item success",
  GET_ITEM_BY_ID = "[Item] Get item by ID",
  GET_ITEM_BY_ID_SUCCESS = "[Item] Get item by ID success"

}

export const getAllItemsAction = createAction(
  itemActionType.GET_ALL_ITEMS
);

export const getAllItemsActionSuccess = createAction(
  itemActionType.GET_ALL_ITEMS_SUCCESS,
  props<{items: Item[]}>()
);

export const createItemAction = createAction(
  itemActionType.CREATE_ITEM,
  props<{item: Item}>()
);
export const createItemActionSuccess = createAction(
  itemActionType.CREATE_ITEM_SUCCESS,
  props<{item: Item}>()
);
export const switchItemAvailabilityAction = createAction(
  itemActionType.SWITCH_ITEM_AVAILABILITY,
  props<{item: Item}>()
);
export const switchItemAvailabilityActionSuccess = createAction(
  itemActionType.SWITCH_ITEM_AVAILABILITY_SUCCESS,
  props<{item: Item}>()
);

export const deleteItemAction = createAction(
  itemActionType.DELETE_ITEM,
  props<{item: Item}>()
);
export const deleteItemActionSuccess = createAction(
  itemActionType.DELETE_ITEM_SUCCESS,
  props<{item: Item}>()
);


export const updateItemAction = createAction(
  itemActionType.UPDATE_ITEM,
  props<{item: Item}>()
);
export const updateItemActionSuccess = createAction(
  itemActionType.UPDATE_ITEM_SUCCESS,
  props<{item: Item}>()
);

export const getItemByIdAction = createAction(
  itemActionType.GET_ITEM_BY_ID,
  props<{itemId: number}>()
);

export const getItemByIdActionSuccess = createAction(
  itemActionType.GET_ITEM_BY_ID_SUCCESS,
  props<{item: Item}>()
);
