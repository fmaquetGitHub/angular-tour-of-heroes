import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {PokedexComponent} from './pokedex/pokedex.component';


import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
