import { PokeResolver } from './services/poke.resolver';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedetailComponent } from './components/pokedetail/pokedetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path : 'detail/:url', resolve : {monPokemon : PokeResolver}, component : PokedetailComponent},
  {path : 'list', component : PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
