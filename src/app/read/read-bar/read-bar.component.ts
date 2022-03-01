import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ItemActionsType} from '../../state/product.state';

@Component({
  selector: 'app-read-bar',
  templateUrl: './read-bar.component.html',
  styleUrls: ['./read-bar.component.css']
})
export class ReadBarComponent implements OnInit {

  @Output() itemEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()
  constructor() { }

  ngOnInit(): void {
  }

  getAllItems() {
    this.itemEventEmitter.emit({actionType:ItemActionsType.GET_ALL_ITEMS})
  }
}
