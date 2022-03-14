import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from '../../../models/item.model';
import * as fromItemActions from '../../../state/actions/item.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-item-update-modal',
  templateUrl: './item-update-modal.component.html',
  styleUrls: ['./item-update-modal.component.css']
})
export class ItemUpdateModalComponent implements OnInit {

  itemFormUpdate!: FormGroup;
  @Input() item!: Item;

  constructor(private store: Store<Item>, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.updateFormItem();
  }

  updateFormItem() {
    this.itemFormUpdate = this.formBuilder.group({
      id: new FormControl(this.item.id),
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required),
      available: new FormControl(this.item.available),
    });
  }

  updateItem() {
    this.store.dispatch(fromItemActions.updateItemAction({item: this.itemFormUpdate.value}));
  }
}
