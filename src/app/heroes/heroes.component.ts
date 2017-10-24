import {Component, OnInit} from '@angular/core';

import {Hero} from '../models/hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Heroes';
  heroes: Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
