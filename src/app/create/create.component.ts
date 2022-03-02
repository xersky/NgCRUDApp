import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  itemForm !: FormGroup;
  submittedItem = false;


  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private router: Router) {
    this.createFormItem();
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

  submitItem(): void {
    this.itemService.create(this.itemForm.value)
      .subscribe(res => {
          this.submittedItem = true;
          this.router.navigate(['/items']);
        },
        error => {
          console.log(error);
        });

    // console.warn(this.itemForm.value);

    //  setTimeout(()=>{ this.router.navigate(['/read']) }, 69)

  }
}
