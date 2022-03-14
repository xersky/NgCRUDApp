import {Component, OnInit} from '@angular/core';
import {ItemActionType} from '../../state/product.state';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-read-bar',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarComponent implements OnInit {


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  getAllItems() {
    this.eventService.publish({actionType:ItemActionType.GET_ALL_ITEMS})
  }

}
