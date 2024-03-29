import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../models/item.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly URI: string = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) {
  }


  getAll() {
    return this.httpClient.get<Item[]>(this.URI);
  }

  getItemById(id: any): Observable<Item>{
    return this.httpClient.get<Item>(this.URI + '/' + id);
  }

  create(data: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.URI, data);
  }

  update(data: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.URI + '/' + data.id, data);
  }

  updateAvailability(data: Item): Observable<Item> {
    let dataAvailabilityChanged = {...data}
    dataAvailabilityChanged.available = !dataAvailabilityChanged.available
    return this.httpClient.put<Item>(this.URI + '/' + dataAvailabilityChanged.id, dataAvailabilityChanged);
  }

  delete(id: any): Observable<Item> {
    return this.httpClient.delete<Item>(this.URI + '/' + id)
  }

  deleteItem(data: Item): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + data.id)
  }
}
