import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedetailComponent } from './components/pokedetail/pokedetail.component';
import { Pokedetail2Component } from './components/pokedetail2/pokedetail2.component';
import { Pokedetail3Component } from './components/pokedetail3/pokedetail3.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedetailComponent,
    Pokedetail2Component,
    Pokedetail3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CardModule,
    DynamicDialogModule,
    ToastModule
  ],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
