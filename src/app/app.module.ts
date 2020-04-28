import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArtistaComponent } from "./components/artista/artista.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { SharedComponent } from "./components/shared/shared.component";
import { HttpClientModule } from "@angular/common/http";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { DomseguroPipe } from "./pipes/domseguro.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    SharedComponent,
    NoimagePipe,
    TarjetasComponent,
    DomseguroPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
