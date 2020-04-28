import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"],
})
export class ArtistaComponent implements OnInit {
  artista: any = {
    external_urls: { spotify: "" },
  };
  tokenSpotify: any;
  topTracks;

  constructor(
    private routerActive: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.spotify.getTokenSpotify().subscribe((token) => {
      this.tokenSpotify = token;
      this.routerActive.params.subscribe((params) => {
        this.getArtista(params.id);
        this.getTopTracks(params.id);
      });
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.spotify.getArtista(this.tokenSpotify, id).subscribe((artista) => {
      this.artista = artista;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(this.tokenSpotify, id).subscribe((topTracks) => {
      this.topTracks = topTracks;
    });
  }
}
