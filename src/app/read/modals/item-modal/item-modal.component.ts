import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../../../services/item.service';
import {Store} from '@ngrx/store';
import {Item} from '../../../models/item.model';
import * as fromItemActions from '../../../state/actions/item.actions';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {

  itemForm !: FormGroup;


  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private store: Store<Item>) {
    this.createFormItem()
  }

  ngOnInit(): void {
  }

  createFormItem() {
    this.itemForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      available: new FormControl(false),
    });
  }


  submitItem() {
    this.store.dispatch(fromItemActions.createItemAction({item: this.itemForm.value}));
  }

}
