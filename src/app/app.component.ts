import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mini CRUD App';

  apiUrl = 'http://localhost:3000/items'


  constructor(private http: HttpClient) { }

  getAPI() {
    return this.http.get(this.apiUrl);
  }

}
