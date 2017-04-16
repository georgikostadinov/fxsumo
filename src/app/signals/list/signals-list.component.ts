import { Component, OnInit } from '@angular/core'

import { SignalShortSummaryViewModel } from '../../model/SignalShortSummaryViewModel'
import { SignalsService } from '../signals.service'

@Component({
    templateUrl: 'signals-list.component.html'
})

export class SignalsListComponent implements OnInit{
    private _signalsSummary:  SignalShortSummaryViewModel[]

    constructor(private _signalsService: SignalsService){
    }

    public ngOnInit(): void{
        this._signalsService
            .getSignalsSummary(12, 0)
            .subscribe(
                signalsSummary => this._signalsSummary = signalsSummary
            )
    } 
 }