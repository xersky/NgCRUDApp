import {TestBed} from '@angular/core/testing';
import {ItemService} from './item.service';
import {HttpClientModule} from '@angular/common/http';
import {Item} from '../models/item.model';

describe('ItemService', () => {
  let service: ItemService;
  const itemsList: Item[] = [
    {
      'id': 1,
      'title': '1: item',
      'description': 'Phone',
      'available': false
    },
    {
      'id': 2,
      'title': '2: item',
      'description': 'TV',
      'available': true
    },
    {
      'title': '3: item',
      'description': 'Laptop',
      'available': false,
      'id': 3
    },
    {
      'id': 4,
      'title': 'TEST REF',
      'description': 'TEST DESC',
      'available': false
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemService]
    });
    service = TestBed.inject(ItemService);
  });

  it('should get all items', (done) => {
    service.getAll().subscribe(items => {
     expect(items.length).toBe(4)
     expect(items).toEqual(itemsList)
      done()
    });
  });

  it('should get one item specified by the ID', (done) => {
    service.getItemById(itemsList[0].id).subscribe(item => {
      expect(item.id).toBe(1)
      expect(item).toEqual(itemsList[0])
      done();
    });
  });

  it('should create an item', (done) => {
    let itemCreatedTest: Item = {id: 5, title: 'pog', description: 'desc', available: false}

    service.create(itemCreatedTest).subscribe(item => {
      expect(item.id).toBe(5)
      expect(item.title).toBe("pog")
      expect(item.description).toBe("desc")
      expect(item.available).toBe(false)
      done();
    });
  });

  it('should update an item', (done) => {
    let itemToUpdateTest: Item = {id: 5, title: 'pog updated', description: 'desc updated', available: true}

    service.update(itemToUpdateTest).subscribe(item => {
      expect(item.id).toBe(5)
      expect(item.title).toBe("pog updated")
      expect(item.description).toBe("desc updated")
      expect(item.available).toBe(true)
      done();
    });
  });

});
