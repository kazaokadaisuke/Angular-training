import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { Music } from './music';
import { SongsService } from './songs.service';
import { MusicDetailComponent } from './music-detail.component'

@Component({
  selector: 'mysongs',
  templateUrl: './songs.component.html',
  styleUrls: ['../app.component.css'],
  // providers: [SongsService]
})

// implements OnInit : インターフェースを実装する、という宣言

export class SongsComponent implements OnInit{
  // title: string = 'Angular-training';
  // company: string = 'MonstarLab';
  // num: number = 150;

  //ViewChildを使って他のコンポーネントの中の内容を使えるようにする。
  @ViewChild(MusicDetailComponent)
  public musicDetailComponent?: MusicDetailComponent;

  // MusicDetailComponent定義された関数を使う
  goBack() {
    this.musicDetailComponent?.goBack()
  }

  songs?: Music[];
  selectSong?: Music;

  constructor(
    private router: Router,
    private songsService: SongsService
  ) {}

  onSelect(song: Music): void {
    this.selectSong = song;
    console.log(this.selectSong);
  }

  getSongs(): void {
    this.songsService.getSongs()
    .then((songs: Music[] | undefined) => {this.songs = songs});
  }

  ngOnInit(): void {
    this.getSongs();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectSong?.id]);
  }
}
