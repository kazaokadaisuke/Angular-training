import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { Music } from './music';

// Promise<Music[]> :一旦プロミス型でデータが返ってきて、最終的にMusic[]になる、という宣言。

@Injectable({ providedIn: 'root'})
export class SongsService {
  private headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  private songsUrl: string = 'api/songs';
  constructor(private http: HttpClient) {}

  getSongs(): Promise<Music[]> {
    return this.http.get(this.songsUrl)
    .toPromise()
    .catch(this.handleError); //エラーの場合の処理

    // .then((response: any) => response.json().data as Music[])
  }

  getSong(id: number): Promise<Music> {
    const url: string = `${this.songsUrl}/${id}`
    return this.http.get(url)
    .toPromise()
    .catch(this.handleError);

    // .then((songs: Music[]) => songs.find((song: Music) => song.id === id))
  }

  create(genre: string): Promise<Music> {
    return this.http
    .post(this.songsUrl, {genre: genre}, {headers: this.headers})
    .toPromise()
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url: string = `${this.songsUrl}/${id}`
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .catch(this.handleError);

    // .then((songs: Music[]) => songs.find((song: Music) => song.id === id))
  }

  update(song: Music ): Promise<Music | undefined> {
    const url: string = `${this.songsUrl}/${song.id}`
    return this.http
    .put(url, song, {headers: this.headers})
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
