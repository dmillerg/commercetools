import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get('assets/data/DatosScraping.json');
  }
}
