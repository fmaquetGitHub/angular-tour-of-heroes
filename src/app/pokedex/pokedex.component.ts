import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../models/pokemon';
import { PokedexService} from '../pokedex.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers: [PokedexService]
})
export class PokedexComponent implements OnInit {

  pokemons : Pokemon[];

  constructor(private pokedexService: PokedexService) { }

  getPokemons(): void {
    this.pokedexService.getPokemons().then(pokemons => this.pokemons = pokemons);
  }

  ngOnInit() {
    this.getPokemons();
  }

}
