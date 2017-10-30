import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { SignalShortSummaryViewModel, SignalDetailsViewModel } from '../model/models'
import { ApiAuthService } from '../shared/services/api-auth.service'
import { AuthService } from '../shared/services/auth.service'
import { RequestOptions, URLSearchParams } from '@angular/http'


@Injectable() 
export class SignalsService extends ApiAuthService{
    constructor(_authService: AuthService){
        super(_authService);
    }

    getSignalsSummary(count: number, skip: number, extraHttpRequestParams?: RequestOptions): Observable<Array<SignalShortSummaryViewModel>>{
        return super.Get('Signals/Summary', extraHttpRequestParams, {
            count: count,
            skip: skip
        });
    }

    getSignalById(id: number, extraHttpRequestParams?: any): Observable<SignalDetailsViewModel>{
        return super.Get(`Signals/${id}`, extraHttpRequestParams);
    }

    postSignal(formData: FormData,  options: RequestOptions){
        return super.Post('Signals', formData, options);
    }
}