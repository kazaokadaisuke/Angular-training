import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicDetailComponent } from './Songs/music-detail.component';
import { SongsComponent } from './Songs/songs.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'detail/:id',
    component: MusicDetailComponent
  }
];


@NgModule({
  // forRootメソッドでパスとコンポーネントをオブジェクトで指定する。
  imports: [RouterModule.forRoot(routes)],

  //exportsにRouterModuleを設定すれば、app-routing.moduleをインポートしたコンポーネントでルーター機能を使えるようになる。
  exports: [RouterModule]
})
export class AppRoutingModule { }
