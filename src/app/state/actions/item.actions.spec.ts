import * as fromItem from './item.actions';

describe('itemItems', () => {
  it('should return an action', () => {
    expect(fromItem.getItemByIdAction.type).toBe('[Item] Get all items');
  });
});
