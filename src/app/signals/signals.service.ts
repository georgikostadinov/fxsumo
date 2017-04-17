import { Injectable } from '@angular/core'
import { SignalsApi } from './SignalsApi'
import { Observable } from 'rxjs/Observable';
import { SignalShortSummaryViewModel, SignalDetailsViewModel } from '../model/models';

@Injectable() 
export class SignalsService{
    constructor(private _signalsApi: SignalsApi){

    }

    getSignalsSummary(count: number, skip: number, extraHttpRequestParams?: any): Observable<Array<SignalShortSummaryViewModel>>{
        return this._signalsApi.signalsSummaryGet(count, skip, extraHttpRequestParams);
    }

    getSignalById(id: number, extraHttpRequestParams?: any): Observable<SignalDetailsViewModel>{
        return this._signalsApi.signalsByIdGet(id);
    }
}