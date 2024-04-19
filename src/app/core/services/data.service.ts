import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable()
export class DataService {
  private http = inject(HttpClient);

  getData(): Observable<Item[]> {
    return this.http.get<Item[]>('assets/data/DatosScraping.json');
  }
}
