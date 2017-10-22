import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { POKEDEX } from './mock-pokedex';

@Injectable()
export class PokedexService {

  constructor() { }

  getPokemons(): Promise<Pokemon[]> {
    return Promise.resolve(POKEDEX);
  }

}
