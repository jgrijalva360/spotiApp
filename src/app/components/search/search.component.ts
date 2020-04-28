import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  objToken;
  artistas;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getTokenSpotify().subscribe((token) => {
      this.objToken = token;
    });
  }

  buscar(termino: string) {
    if (termino) {
      this.spotifyService
        .getArtistas(termino, this.objToken)
        .subscribe((res: any) => {
          this.artistas = res;
        });
    }
  }
}
