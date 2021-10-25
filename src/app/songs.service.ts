import { Injectable } from '@angular/core'
import { Music } from './music'
import { SONGS } from './mock-songs'

// Promise<Music[]> :一旦プロミス型でデータが返ってきて、最終的にMusic[]になる、という宣言。

@Injectable()
export class SongsService {
  getSongs(): Promise<Music[]> {
    return Promise.resolve(SONGS);
  }
}

