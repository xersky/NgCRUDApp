export enum DataStateTypeEnum {
  LOADING,
  SUCCESS,
  ERROR
}

export enum ItemActionType {
  GET_ALL_ITEMS = '[Items] get all Items',
  SWITCH_AVAILABILITY = '[Item.available] switch availability of Item',
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



