import { Pokemon } from './../../models/pokemon.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss']
})
export class PokedetailComponent {

  currentPokemon! : Pokemon

  constructor(private _ar : ActivatedRoute){}

  ngOnInit() {
    this.currentPokemon = this._ar.snapshot.data['monPokemon']
  }
}
