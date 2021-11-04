import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Music } from '../Songs/music';

//検索サービスのモジュールを定める。

@Injectable({
  providedIn: 'root'
})
export class SongSearchService {
  constructor(private http: HttpClient) { }
  search(term: string): Observable<Music[]> {
    return this.http.get(`app/songs/?name=${term}`)
      .pipe(map(response: Music) => response.json().data as Music[]);
  }
}
