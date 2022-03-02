import {Component, OnInit} from '@angular/core';
import {Item} from '../models/item.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  itemFormUpdate!: FormGroup;

  item: Item | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.getItem()
  }

  /*
    selectedItem?: Item;
    onSelect(item: Item){
      this.selectedItem = item;
    }
  */
  getItem() {
    this.itemService.getItemById(this.activatedRoute.snapshot.params['id']).subscribe((res: Item) => {
      this.item = res;
      this.updateFormItem(this.item);
    }, error => {
      console.error(error.message);
    });
  }

  updateFormItem(item : Item) {
    console.log(this.item)
    this.itemFormUpdate = this.formBuilder.group({
      id: new FormControl(item.id),
      title: new FormControl(item.title, Validators.required),
      description: new FormControl(item.description, Validators.required),
      available: new FormControl(item.available),
    });
  }

  submitUpdatedItem(): void {

    this.itemService.update(this.itemFormUpdate.value, this.itemFormUpdate.controls['id'].value)
      .subscribe(res => {
          this.router.navigate(['/items']);
        },
        error => {
          console.log(error);
        });
  }
}
