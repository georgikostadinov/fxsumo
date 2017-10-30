import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { ActionViewModel } from '../model/models';
import { ApiAuthService } from '../shared/services/api-auth.service'

@Injectable() 
export class CurrencyPairsService extends ApiAuthService{
    getAllCurrencyPairs(extraHttpRequestParams?: any): Observable<Array<ActionViewModel>>{
        return super.Get('CurrencyPairs', extraHttpRequestParams);
    }
}