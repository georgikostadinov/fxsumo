import { Component, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Router, ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap'

import { SignalsService } from '../signals.service'
import { YoutubeService } from '../../shared/services/youtube.service'

import { SignalDetailsViewModel } from '../../model/SignalDetailsViewModel'

@Component({
    templateUrl: 'signal-details.component.html',
    styles: [
        `.panel { 
            margin-bottom: 0px
         }
         .panel-control {
            padding: 0 10px 0 0
         }`
    ]
})

export class SignalDetailsComponent implements OnInit{
    signal: SignalDetailsViewModel
    pricesCount: number = 0

    constructor(private _signalsService: SignalsService,
                private route: ActivatedRoute,
                private router: Router,
                private sanitizer: DomSanitizer,
                private _youtubeService: YoutubeService){
    }

    public ngOnInit(): void{
        this.route.params.subscribe(
            params => {
                let id = params['id'];
                this._signalsService.getSignalById(id).subscribe(
                    signal => {
                        this.signal = signal;
                        this.pricesCount = signal.takeProfit1 != 0 ? ++this.pricesCount : this.pricesCount
                        this.pricesCount = signal.takeProfit2 != 0 ? ++this.pricesCount : this.pricesCount
                        this.pricesCount = signal.takeProfit3 != 0 ? ++this.pricesCount : this.pricesCount
                        this.pricesCount = signal.takeProfit4 != 0 ? ++this.pricesCount : this.pricesCount
                        this.pricesCount = signal.openPrice != 0 ? ++this.pricesCount : this.pricesCount
                        this.pricesCount = signal.stopLoss != 0 ? ++this.pricesCount : this.pricesCount
                    }
                )
            }
        )
    }

    public youtubeURL(url: string): SafeResourceUrl {
        return this._youtubeService.getEmbedURL(url);
    }


}