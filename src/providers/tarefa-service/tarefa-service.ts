import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Observable";
import {Tarefa} from "../../pages/model/Tarefa.model";


/*
  Generated class for the TarefaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarefaServiceProvider {

  constructor(public http: Http) {
    console.log('Hello TarefaServiceProvider Provider');
  }

  listarTarefa() : Observable<Tarefa[]>  {
      this.http.get('http://localhost:8080/RestAngular2/tarefa').map(res => res.json() as Tarefa); //.catch(error => Observable.throw(error));

      console.log(this.http.get('http://localhost:8080/RestAngular2/tarefa').map(res => res.json() as Tarefa));

    return this.http.get('http://localhost:8080/RestAngular2/tarefa').map(res => res.json() as Tarefa);
  }
}
