import { Component, OnInit } from '@angular/core'

import { SignalShortSummaryViewModel } from '../../model/SignalShortSummaryViewModel'
import { SignalsService } from '../signals.service'
import { YoutubeService } from '../../shared/services/youtube.service'

@Component({
    templateUrl: 'signals-list.component.html'
})

export class SignalsListComponent implements OnInit{
    private _signalsSummary:  Array<Array<SignalShortSummaryViewModel>>

    constructor(private _signalsService: SignalsService, 
        private _youtubeService: YoutubeService){
    }

    public ngOnInit(): void{
        this._signalsService
            .getSignalsSummary(12, 0)
            .subscribe(
                signalsSummary => this._signalsSummary = this.groupSignals(signalsSummary, 3)
            )
    } 

    private groupSignals(signals: Array<SignalShortSummaryViewModel>, size: number): Array<Array<SignalShortSummaryViewModel>>{
        let grouped: Array<Array<SignalShortSummaryViewModel>> = new Array<Array<SignalShortSummaryViewModel>>()
        for (var i=0; i<signals.length; i+=size) {
            var smallarray = signals.slice(i,i+size);
            grouped.push(smallarray);
        }

        return grouped;
    }

    getThumbnailSource(signal: SignalShortSummaryViewModel): string{
        let youtubeThumbnailURL = this._youtubeService.getThumbnailURL(signal.youtubeURL);
        return youtubeThumbnailURL != null ? youtubeThumbnailURL : signal.thumbnailURL;
    }
 }