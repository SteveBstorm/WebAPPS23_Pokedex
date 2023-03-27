import { PokeService } from './poke.service';
import { Pokemon } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PokeResolver implements Resolve<Pokemon | string> {

  constructor(private _service : PokeService,
      private _message : MessageService
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon |string> {
    return this._service.getDetail(route.params['url']).pipe(catchError((error) => {
      this._message.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' })
      return of(error)

    }))
  }
}
