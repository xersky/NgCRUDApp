export enum DataStateTypeEnum {
  LOADING,
  SUCCESS,
  ERROR
}

export enum ItemActionsType {
  GET_ALL_ITEMS = '[Items] get all Items'
}

export interface ActionEvent {
  actionType?: ItemActionsType;
  payload?: any;
}

export interface ItemState<T> {
  data?: T,
  state?: DataStateTypeEnum,
  error?: string
}



