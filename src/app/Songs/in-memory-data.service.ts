import { InMemoryDbService } from 'angular-in-memory-web-api'; //webサービスをメモリで使うためのモジュール
import { Music } from './music';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let songs: Music[] = [
     { id : 0, genre : 'techno', bpm : 89, country : 'USA'},
     { id : 1, genre : 'reggae', bpm : 80, country : 'Jamaica'},
     { id : 2, genre : 'Cumbia', bpm : 79, country : 'Columbia'},
     { id : 3, genre : 'J-pop', bpm : 100, country : 'Japan'},
     { id : 4, genre : 'K-pop', bpm : 110, country : 'Korea'},
     { id : 5, genre : 'Samba', bpm : 99, country : 'Brazil'}
    ];
    return {songs};
  }
}

