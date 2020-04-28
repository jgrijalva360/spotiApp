import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectTarget(obj: any) {
    if (obj.type === "album") {
      this.router.navigate([`artist/${obj.artists[0].id}`]);
    } else if (obj.type === "artist") {
      this.router.navigate([`artist/${obj.id}`]);
    }
  }
  selectArtist(obj) {
    this.router.navigate([`artist/${obj.id}`]);
  }
}
