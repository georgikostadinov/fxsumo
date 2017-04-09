import { Injectable } from '@angular/core'
import { CurrencyPairsApi } from './CurrencyPairsApi'
import { Observable } from 'rxjs/Observable';
import { ActionViewModel } from '../model/models';

@Injectable() 
export class CurrencyPairsService{
    constructor(private _currencyPairsApi: CurrencyPairsApi){

    }

    getAllCurrencyPairs(extraHttpRequestParams?: any): Observable<Array<ActionViewModel>>{
        return this._currencyPairsApi.currencyPairsGet(extraHttpRequestParams);
    }
}