import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {PokedexComponent} from './pokedex/pokedex.component';

import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';

const appRoutes: Routes = [
  {path: 'pokedex', component: PokedexComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroDetailComponent,
    PokedexComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
