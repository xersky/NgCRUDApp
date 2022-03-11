import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUpdateModalComponent } from './item-update-modal.component';

describe('ItemUpdateModalComponent', () => {
  let component: ItemUpdateModalComponent;
  let fixture: ComponentFixture<ItemUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
