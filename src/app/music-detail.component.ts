import { Component, Input } from '@angular/core'
import { Music } from './music'

@Component({
  selector: 'music-detail',
  template: `
   <div *ngIf="song">
    <h1>{{ song.country }}</h1>
    <input [(ngModel)]="song.bpm" placeholder="text" class="genre-input">
    <h1>{{ song.genre }}</h1>
    <br>
  </div>
  `,
})

export class MusicDetailComponent {
  @Input()
  song: Music | undefined;
}
