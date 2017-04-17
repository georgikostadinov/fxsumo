import { Component, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Router, ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap'

import { SignalsService } from '../signals.service'
import { YoutubeService } from '../../shared/services/youtube.service'

import { SignalDetailsViewModel } from '../../model/SignalDetailsViewModel'

@Component({
    templateUrl: 'signal-details.component.html'
})

export class SignalDetailsComponent implements OnInit{
    signal: SignalDetailsViewModel

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
                    }
                )
            }
        )
    }

    public youtubeURL(url: string): SafeResourceUrl {
        return this._youtubeService.getEmbedURL(url);
    }
}