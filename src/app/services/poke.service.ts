import { Pokedex } from './../models/pokedex.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  //private readonly url : string = "https://pokeapi.co/api/v2/pokemon"

  constructor(
    private _client : HttpClient
  ) { }

  getAll(url : string) : Observable<Pokedex> {
    return this._client.get<Pokedex>(url)
  }

  getDetail(url : string): Observable<Pokemon> {
    return this._client.get<Pokemon>(url)
  }
}
