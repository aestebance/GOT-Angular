import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get('https://api.got.show/api/show/houses');
  }

  getHouse(houseName): Observable<any> {
    houseName = houseName.replace(/&apos;/g, '\'');
    return this.http.get('https://api.got.show/api/show/houses/' + houseName);
  }

}
