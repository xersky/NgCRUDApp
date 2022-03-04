import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ActionEvent} from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
  eventObservable: Observable<ActionEvent> = this.eventSubject.asObservable();

  constructor() {
  }

  publish($event: ActionEvent) {
    this.eventSubject.next($event);
  }
}
