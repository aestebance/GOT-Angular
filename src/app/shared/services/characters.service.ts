import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {  }

  getCharacters(): Observable<object> {
      return this.http.get('https://api.got.show/api/show/characters');
  }
  getChar(charName): Observable<object> {
    return this.http.get('https://api.got.show/api/show/characters/' + charName);
  }
}
