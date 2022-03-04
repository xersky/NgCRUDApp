import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ItemActionType} from '../../state/product.state';
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
   // this.itemEventEmitter.emit({actionType:ItemActionType.GET_ALL_ITEMS})
    this.eventService.publish({actionType:ItemActionType.GET_ALL_ITEMS})
  }

}
