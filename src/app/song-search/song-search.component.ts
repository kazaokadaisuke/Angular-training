import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

import { SongSearchService } from './song-search.service';
import { Music } from '../Songs/music'

@Component({
  selector: 'song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css'],
  providers: [ SongSearchService ]
})
export class SongSearchComponent implements OnInit {
  songs!: Observable<Music[]>;

  private searchTerms = new Subject<string>();
  constructor(
    private songSearchService: SongSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  //検索のコンポーネントに初期化のメソッドを加える。

  ngOnInit(): void {
    this.songs! = this.searchTerms
    .pipe(debounceTime(300))  //0.3秒待ってから検索の処理を行う。
    .pipe(distinctUntilChanged()) //検索後が前と変わっていなかったらそれは無視する。
    .pipe(switchMap((term: string) => term　
    ? this.songSearchService.search(term)　//検索を実行する。
    : of<Music[]>([]))
    // .pipe(catchError((error: any) => {
    //   console.log(error);
    //   return of<Music[]>([]);
    // }))
    );
  }
  gotoDetail(song: Music): void {
    let link = ['/detail', song.id];
    this.router.navigate(link);
  }
}
