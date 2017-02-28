import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ITeam } from './team';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsService {

  private _url: string = "http://apifxsumo.azurewebsites.net/teams";
  TestProp: number = 5;

  constructor(private _http: Http) { }

  getAllTeams() : Observable<ITeam[]> {
    let result = this._http.get(this._url).map((response: Response)=> <ITeam[]> response.json())
    return result;
  }

}
