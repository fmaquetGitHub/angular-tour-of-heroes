import {Injectable} from '@angular/core';
import {Pokemon} from './models/pokemon';
import {POKEDEX} from './mock/mock-pokedex';
import { Http, Response } from '@angular/http';



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokedexService {

  private pokemonsUrl = 'http://localhost:8080/api/pokemons';  // URL to web api

  constructor(private http: Http) {
  }

  getPokemons(): Promise<Pokemon[]> {
    return Promise.resolve(POKEDEX);
  }

  getPokemonsFromApi(): Observable<Pokemon[]> {
    return this.http.get(this.pokemonsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }




  getHeroes(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonsUrl)
      .toPromise()
      .then(response => response.json().data as Pokemon[])
      .catch(this.handleError);
  }

  getPokemonsFromApi2(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonsUrl)
      .toPromise()
      .then(response => response.json().data as Pokemon[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('STOP : An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
