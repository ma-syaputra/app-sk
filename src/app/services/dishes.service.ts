import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishesService {
  url = 'http://localhost:3000/dishes';
  constructor(private http: HttpClient) { }
  all(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => results['item'])
    );
  }
  getDetails(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}