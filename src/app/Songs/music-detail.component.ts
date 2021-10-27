import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Music } from './music';
import { SongsService } from './songs.service';

@Component({
  selector: 'music-detail',
  templateUrl: './music-detail.component.html',
})


export class MusicDetailComponent implements OnInit {
  @Input()
  song: Music | undefined;

   // インポートしたオブジェクトをクラスの中のコンストラクターで受け取る。
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private SongsService: SongsService,
  ) {};

  goBack(): void {
    //Locationのプロパティに対しバックのメソッドを呼び出して、履歴をもどる動作をしている。
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
    .pipe(switchMap((params: Params) => this.SongsService.getSong(+params['id'])))
    .subscribe((song: Music | undefined) => this.song = song)

    // 上を省略しないで書くと下のようになる。
    // let params = this.route.params;
    // let song = params.pipe(
    //    switchMap((params: Params) => this.SongsService.getSong(+params['id']))
    //   );
    // song.subscribe((song: Music | undefined) => this.song = song)
  }
}