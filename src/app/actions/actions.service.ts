import { Injectable } from '@angular/core'
import { ActionsApi } from './ActionsApi'
import { Observable } from 'rxjs/Observable';
import { ActionViewModel } from '../model/models';

@Injectable() 
export class ActionsService{
    constructor(private _actionsApi: ActionsApi){

    }

    getAllActions(extraHttpRequestParams?: any): Observable<Array<ActionViewModel>>{
        return this._actionsApi.actionsGet(extraHttpRequestParams);
    }
}