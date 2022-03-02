import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.deleteItem()
  }

  deleteItem(): void {
    this.itemService.delete(this.route.snapshot.params['id'])
      .subscribe(res => {
          this.router.navigate(['/items']);
        },
        error => {
          console.log(error);
        });
  }
}
