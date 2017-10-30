import { AuthService } from '../services/auth.service'
import { Observable } from 'rxjs/Observable'
import { RequestOptions, URLSearchParams } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable() 
export class ApiAuthService{
    protected baseApiUrl: string = 'http://localhost:1322/'

    constructor(protected _authService:AuthService) {        
    }

    Get(url: string, options?: RequestOptions, queryParameters?: any): Observable<any>{
        if(queryParameters != null){
            options = this.SetupQueryParameters(options, queryParameters);
        }

        return this._authService.AuthGet(this.baseApiUrl + url, options);
    }

    Post(url: string, data: any, options?: RequestOptions) : Observable<any>{
        return this._authService.AuthPost(this.baseApiUrl + url, data, options);
    }

    SetupQueryParameters(options: RequestOptions, queryParametersObject: any) : RequestOptions{
        if (options == null){
            options = new RequestOptions();
        }

        let params = new URLSearchParams();

        for (var key in queryParametersObject) {
            if (queryParametersObject.hasOwnProperty(key)) {
                params.set(key, queryParametersObject[key]);                
            }
        }

        options.search = params;

        return options;
    }
}