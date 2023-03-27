import { Component, Input } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokedetail3',
  templateUrl: './pokedetail3.component.html',
  styleUrls: ['./pokedetail3.component.scss']
})
export class Pokedetail3Component {
  currentPokemon! : Pokemon
  // @Input() set url(value : string) {
  //   this._service.getDetail(value).subscribe({
  //     next : (data : Pokemon) => this.currentPokemon = data
  //   })
  // }

  constructor(
    private _service : PokeService,
    private _dialogRef : DynamicDialogConfig
    ) {

  }

  ngOnInit(){
    let url = this._dialogRef.data.url
    this._service.getDetail(url).subscribe({
         next : (data : Pokemon) => this.currentPokemon = data
       })
  }

}
