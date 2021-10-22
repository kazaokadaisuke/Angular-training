import { Component } from '@angular/core';

export class Music { //オブジェクト中のプロパティの型付け
  'genre': string;
  'bpm': number;
  'country': string;
};

//app.component.tsに部品として差し込むコンポーネントを定義してある。

//@ComponentはAngularの中の関数でデコレーター関数と呼ぶ。
//下で定義してある関数に対して設定(メタデータ)を加えている。（だから10行目のカッコの後ろに；が無い）

// データバインディング : コンポーネントにおいてテンプレートとクラス内の要素を繋ぐ仕組み

const SONGS: Music[] = [
 { genre : 'techno', bpm : 89, country : 'USA'},
 { genre : 'reggae', bpm : 89, country : 'Jamaica'},
 { genre : 'Cumbia', bpm : 89, country : 'Columbia'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {　
  // ↓AppComponentのプロパティ

  title: string = 'Angular-training';　
  company: string = 'MonstarLab';
  num: number = 150;
  songs = SONGS;

  song: Music = this.songs[0];
  // {
  //   genre : 'hiphop',
  //   bpm : 89,
  //   country : 'Japan'
  // };
}
