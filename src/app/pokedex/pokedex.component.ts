import {Component, OnInit} from '@angular/core';

import {Pokemon} from '../models/pokemon';
import {PokedexService} from '../pokedex.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers: [PokedexService]
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[];
  errorMessage: string;

  constructor(private pokedexService: PokedexService) {
  }

  getPokemons() {
    this.pokedexService.getPokemonsFromApi()
      .subscribe(
        pokemons => localStorage.setItem('pokedex', JSON.stringify(pokemons)),
        error => this.errorMessage = <any>error);

    this.pokemons = JSON.parse(localStorage.getItem('pokedex'));
  }

  ngOnInit() {
    this.getPokemons();
  }

}
