import { Pokedetail3Component } from './../pokedetail3/pokedetail3.component';
import { Pokedex } from './../../models/pokedex.model';
import { PokeService } from './../../services/poke.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

  pokedex! : Pokedex

  constructor(
    private _service : PokeService,
    private _router : Router,
    public dialogService: DialogService
  ){}

  ngOnInit() {
    let startUrl : string = "https://pokeapi.co/api/v2/pkemon"
    this.loadPokedex(startUrl)
  }

  loadPokedex(url : string) {
    this._service.getAll(url).subscribe({
      next : (data : Pokedex) => {
        this.pokedex = data
        console.log(this.pokedex)
      }
    })
  }
  selectedPokemon! : string
  selectPokemon(url : string) {
    this.selectedPokemon = url
  }

  showDetail(url : string){
    this._router.navigate(['detail', url])
  }

  dialog(url : string){
    this.dialogService.open(Pokedetail3Component, {
      data : {
        url : url
      },
      width : '500px',
      header : 'Détail du pokemon'

    })
  }

  // previous(url : string){
  //   this.loadPokedex(url)
  // }
  // next(url: string) {
  //   this.loadPokedex(url)
  // }
}
