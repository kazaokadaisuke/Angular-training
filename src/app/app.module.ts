import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //アプリケーションをブラウザで動かすためのモジュール
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './Songs/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicDetailComponent } from './Songs/music-detail.component';
import { SongsComponent } from './Songs/songs.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//app.module.tsにアプリケーションの設定が書かれている。
//コンポーネントを実際のアプリケーションにまとめる。

@NgModule({
  declarations: [
    AppComponent, //AppComponentを使いますという宣言
    MusicDetailComponent,
    SongsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule, //ブラウザで動かすためのモジュールをインポート
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [ AppComponent ] //AppModuleが立ち上がった時にAppComponentを実行する
})
export class AppModule { } //クラスは作られただけでは実行されたにため、main.tsの11行目の記述によって実行されている。


