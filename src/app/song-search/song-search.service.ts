import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Music } from '../Songs/music';
import { map } from 'rxjs/add/operator/map';

// Promise<Music[]> :一旦プロミス型でデータが返ってきて、最終的にMusic[]になる、という宣言。


@Injectable({
  providedIn: 'root'
})
export class SongSearchService {
  constructor(private http: HttpClient) { }
  search(term: string): Observable<Music[]> {
    return this.http.get(`app/songs/?name=${term}`)
    .map((response: Response) => response.json().data as Music[]);
  }
}
