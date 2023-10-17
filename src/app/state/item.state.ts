export enum DataStateTypeEnum {
  LOADING,
  SUCCESS,
  ERROR
}

export enum ItemActionType {
  GET_ALL_ITEMS = '[Item] get all Items',
  SWITCH_AVAILABILITY = '[Item.available] switch availability of Item',
  //GET_ITEM_BY_ID = '[Item] get Item by the ID',
  DELETE_ITEM = '[Item] delete the specified Item'
}

export interface ActionEvent {
  actionType?: ItemActionType;
  payload?: any;
}

export interface ItemState<T> {
  data?: T,
  state?: DataStateTypeEnum,
  error?: string
}



