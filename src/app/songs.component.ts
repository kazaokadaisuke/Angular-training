import { Component, OnInit } from '@angular/core';
import { Music } from './music';
import { SongsService } from './songs.service'

@Component({
  selector: 'mysongs',
  templateUrl: './songs.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [SongsService]
})


// implements OnInit : インターフェースを実装する、という宣言

export class SongsComponent implements OnInit{
  // title: string = 'Angular-training';
  // company: string = 'MonstarLab';
  // num: number = 150;

  songs?: Music[];
  selectSong?: Music;

  constructor(private songsService: SongsService) {}

  onSelect(song: Music): void {
    this.selectSong = song;
    console.log(this.selectSong);
  }

  getSongs(): void {
    this.songsService.getSongs()
    .then((songs: Music[]) => {this.songs = songs});
  }

  ngOnInit(): void {
    this.getSongs();
  }
}
