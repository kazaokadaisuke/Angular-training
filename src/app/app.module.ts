import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //アプリケーションをブラウザで動かすためのモジュール
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//app.module.tsにアプリケーションの設定が書かれている。
//コンポーネントを実際のアプリケーションにまとめる。

@NgModule({
  declarations: [
    AppComponent //AppComponentを使いますという宣言
  ],
  imports: [
    BrowserModule, //ブラウザで動かすためのモジュールをインポート
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //AppModuleが立ち上がった時にAppComponentを実行する
})
export class AppModule { } //クラスは作られただけでは実行されたにため、main.tsの11行目の記述によって実行されている。


