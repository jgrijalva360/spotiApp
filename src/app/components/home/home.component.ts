import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  nuevasCanciones;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getTokenSpotify().subscribe((token) => {
      this.spotifyService.getNewReleases(token).subscribe((result) => {
        this.nuevasCanciones = result;
      });
    });
  }
}
