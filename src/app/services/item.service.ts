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


  getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.URI);
  }

  getItemById(id: any): Observable<Item>{
    return this.httpClient.get<Item>(this.URI + '/' + id);
  }

  create(data: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.URI, data);
  }

  update(data: Item, id: number): Observable<Item> {

    return this.httpClient.put<Item>(this.URI + '/' + data.id, data);
  }
  updateAvailabilite(data: Item): Observable<Item> {
    data.available = !data.available
    return this.httpClient.put<Item>(this.URI + '/' + data.id, data);
  }

  delete(id: any): Observable<Item> {
    return this.httpClient.delete<Item>(this.URI + '/' + id)
  }
}
