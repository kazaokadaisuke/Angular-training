import { Component } from '@angular/core';
import { SongsComponent } from './songs.component';

//app.component.tsに部品として差し込むコンポーネントを定義してある。

//@ComponentはAngularの中の関数でデコレーター関数と呼ぶ。
//下で定義してある関数に対して設定(メタデータ)を加えている。（だから10行目のカッコの後ろに；が無い）

// データバインディング : コンポーネントにおいてテンプレートとクラス内の要素を繋ぐ仕組み

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {　
  title: string = 'Angular-training';　
  company: string = 'MonstarLab';
  num: number = 150;

  constructor(private SongsComponent: SongsComponent) {}
}
