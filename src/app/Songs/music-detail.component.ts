import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Music } from './music';
import { SongsService } from './songs.service';

@Component({
  selector: 'music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})

export class MusicDetailComponent implements OnInit {
  private _song: Music | undefined ;
  get song(): Music | undefined {
    return this._song;
  }

   // インポートしたオブジェクトをクラスの中のコンストラクターで受け取る。
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private songsService: SongsService,
  ) {};

  goBack(): void {
    //Locationのプロパティに対しバックのメソッドを呼び出して、履歴をもどる動作をしている。
    this.console();
    this.location.back();
  }

  save(): void {
    this.songsService.update(this._song)
    .then(() => this.goBack());
  }

  ngOnInit(): void {
    this.route.params
    .pipe(switchMap((params: Params) => this.songsService.getSong(+params['id'])))
    .subscribe((song: Music | undefined) => this._song = song);

    // 上を省略しないで書くと下のようになる。
    // let params = this.route.params;
    // let song = params.pipe(
    //    switchMap((params: Params) => this.SongsService.getSong(+params['id']))
    //   );
    // song.subscribe((song: Music | undefined) => this.song = song)
  }

  private console(){
    console.log("hello")
  }
}
