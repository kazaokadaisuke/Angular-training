import { Component, OnInit } from '@angular/core';
import { Music } from './music';
import { SongsService } from './songs.service'

//app.component.tsに部品として差し込むコンポーネントを定義してある。

//@ComponentはAngularの中の関数でデコレーター関数と呼ぶ。
//下で定義してある関数に対して設定(メタデータ)を加えている。（だから10行目のカッコの後ろに；が無い）

// データバインディング : コンポーネントにおいてテンプレートとクラス内の要素を繋ぐ仕組み

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SongsService]
})

export class AppComponent {　
  // ↓AppComponentのプロパティ

  title: string = 'Angular-training';　
  company: string = 'MonstarLab';
  num: number = 150;

  songs!: Music[];
  selectSong!: Music; //= this.songs[0];

  constructor(private songsService: SongsService) {}

  // :void = リターンがないという戻り値の型指定
  onSelect(song: Music): void {
    this.selectSong = song;
    console.log(this.selectSong);
  }

  getSongs(): void {
    this.songsService.getSongs()
    .then((songs: Music[]) => {this.songs = songs});
  }

  //一番最初に実行したいメソッドはOnInitをインポートし、ngOnInitの中で定義する。
  ngOnInit(): void {
    this.getSongs();
  }
}
