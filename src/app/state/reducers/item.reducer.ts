import {Action, ActionReducer, ActionReducerMap, createFeatureSelector, createReducer, createSelector, MetaReducer, on} from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Item} from '../../models/item.model';

export const itemFeatureKey = 'items';

export interface ItemState extends EntityState<Item> {
  selectedItemId: number;
  dataState: string;
}

export const getSelectedItemId = (state: ItemState) => state.selectedItemId;


export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: (item: Item) => item.id
});

export const initialState: ItemState = itemAdapter.getInitialState({
  selectedItemId: 0,
  dataState: 'INIT'
});

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.getAllItemsAction, (state) => ({
    ...state,
    dataState: 'LOADING ITEMS'
  })),
  on(ItemActions.getAllItemsActionSuccess, (state, {items}) => {
    return itemAdapter.setAll(items, {
      ...state,
      dataState: 'ITEMS LOADED'
    });
  }),
  on(ItemActions.deleteItemAction, (state) => ({
    ...state,
    dataState: 'DELETE IN ACTION'
  })),
  on(ItemActions.deleteItemActionSuccess, (state, {item}) => {
    return itemAdapter.removeOne(item.id, {
      ...state,
      dataState: 'ITEM DELETED'
    });
  }),
  on(ItemActions.switchItemAvailabilityAction, (state) => ({
    ...state,
    dataState: 'SWITCH ON LOAD'
  })),
  on(ItemActions.switchItemAvailabilityActionSuccess, (state, {item}) => {
    return itemAdapter.updateOne({id: item.id, changes: item}, {
      ...state,
      dataState: 'ITEM AVAILABILITY SWITCHED'
    });
  }),
  on(ItemActions.createItemAction, (state) => ({
    ...state,
    dataState: 'CREATING ITEM'
  })),
  on(ItemActions.createItemActionSuccess, (state, {item}) => {
    return itemAdapter.addOne(item, {
      ...state,
      dataState: 'ITEM CREATED'
    });
  }),
  on(ItemActions.updateItemAction, (state) => ({
    ...state,
    dataState: 'UPDATING ITEM'
  })),
  on(ItemActions.updateItemActionSuccess, (state, {item}) => {
    return itemAdapter.updateOne({id: item.id, changes: item}, {
      ...state,
      dataState: 'ITEM UPDATED'
    });
  }),
  on(ItemActions.getItemByIdAction, (state) => ({
    ...state,
    dataState: 'LOADING THE SPECIFIED ITEM'
  })),
  on(ItemActions.getItemByIdActionSuccess, (state, {item}) => {
    return itemAdapter.setOne(item, {
      ...state,
      dataState: 'SPECIFIED ITEM LOADED'
    });
  })
);

export function reducer(state: ItemState | undefined, action: Action) {
  return itemReducer(state, action);
}

/*export const reducers: ActionReducerMap<any> = {
  items: itemReducer,
};*/

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<ItemState>[] = [debug];

export const getItemsState = createFeatureSelector<ItemState>('items');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,

} = itemAdapter.getSelectors();

//const selector = (selectorFn: <T>(state: ItemState) => Item[]) => createSelector(getItemsState, selectorFn);

export const getItemIds = createSelector(
  getItemsState,
  selectIds
);

export const getItemEntities = createSelector(
  getItemsState,
  selectEntities
);

export const getAllItems = createSelector(
  getItemsState,
  selectAll
);

/*
export const getItemById = createSelector(
  selectAll,
  getSelectedItemId,
  (items, id) => items[id]
);
*/


