import { PokeService } from './../../services/poke.service';
import { Pokemon } from './../../models/pokemon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokedetail2',
  templateUrl: './pokedetail2.component.html',
  styleUrls: ['./pokedetail2.component.scss']
})
export class Pokedetail2Component {
  currentPokemon! : Pokemon
  @Input() set url(value : string) {
    this._service.getDetail(value).subscribe({
      next : (data : Pokemon) => this.currentPokemon = data
    })
  }

  constructor(private _service : PokeService) {

  }


}
