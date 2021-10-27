import { Component, OnInit } from '@angular/core';
import { Music } from '../../Songs/music';
import { SongsService } from '../../Songs/songs.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  songs?: Music[];
  constructor(private songsService: SongsService) {}
  ngOnInit(): void {
    this.songsService.getSongs()
    .then((songs: Music[]) => {
      this.songs = songs.slice(0, 3)
      console.log(this.songs);
    });

    this.songsService.getSong(1)
    .then((song: Music | undefined)  => console.log(song));
  }
}
