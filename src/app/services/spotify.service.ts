import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getTokenSpotify() {
    return this.http.get(
      "http://localhost:3000/spotify/331b684e803d456e85278c1fcc8db099/5cce4828925c4be584c99f64f0aec3a0"
    );
  }

  getQuery(obj, query) {
    const headers = new HttpHeaders({
      Authorization: obj.token_type + " " + obj.access_token,
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, {
      headers,
    });
  }

  getNewReleases(obj) {
    return this.getQuery(obj, "browse/new-releases?country=MX&limit=50").pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string, obj) {
    return this.getQuery(obj, `search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(obj, id: string) {
    return this.getQuery(obj, `artists/${id}`);
  }

  getTopTracks(obj, id: string) {
    return this.getQuery(obj, `artists/${id}/top-tracks?country=MX`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
