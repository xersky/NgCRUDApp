import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Item} from '../../models/item.model';

export const itemFeatureKey = 'items';

export interface ItemState extends EntityState<Item> {
  selectedItemId: number;
}

export const getSelectedItemId = (state: ItemState) => state.selectedItemId;


export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: (item: Item) => item.id
});

export const initialState: ItemState = itemAdapter.getInitialState({
  selectedItemId: 0
});

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.getAllItemsActionSuccess, (state, {items}) => {
    return itemAdapter.setAll(items, state);
  }),
  on(ItemActions.deleteItemActionSuccess, (state, {item}) => {
    return itemAdapter.removeOne(item.id, state);
  }),
  on(ItemActions.switchItemAvailabilityActionSuccess, (state, {item}) => {
    return itemAdapter.updateOne({id: item.id, changes: item}, state);
  }),
  on(ItemActions.createItemActionSuccess, (state, {item}) => {
    return itemAdapter.addOne(item, {...state});
  }),
  on(ItemActions.updateItemActionSuccess, (state, {item}) => {
    return itemAdapter.updateOne({id: item.id, changes: item}, state);
  }),
  on(ItemActions.getItemByIdActionSuccess, (state, {item}) => {
    return itemAdapter.setOne(item, state);
  })
);

export function reducer(state: ItemState | undefined, action: Action) {
  return itemReducer(state, action);
}


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


