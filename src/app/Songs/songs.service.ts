import { Injectable } from '@angular/core'
import { Music } from './music'
import { SONGS } from './mock-songs'

// Promise<Music[]> :一旦プロミス型でデータが返ってきて、最終的にMusic[]になる、という宣言。

@Injectable({ providedIn: 'root'})
export class SongsService {
  getSongs(): Promise<Music[]> {
    return Promise.resolve(SONGS);
  }

  getSong(id: number): Promise<Music | undefined> {
    return this.getSongs()
    .then((songs: Music[]) => songs.find((song: Music) => song.id === id));
  }
}
