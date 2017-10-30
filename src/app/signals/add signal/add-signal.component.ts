import { Component, OnInit } from '@angular/core'
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable }                                        from 'rxjs/Rx'
import { User } from 'oidc-client'     
import { Subscription } from 'rxjs/Subscription'   

import { ActionsService } from '../../actions/actions.service'
import { CurrencyPairsService } from '../../currency-pairs/currency-pairs.service'
import { AuthService } from '../../shared/services/auth.service'
import { SignalsService } from '../../signals/signals.service'
import { Select2Grouping } from '../../shared/select2.grouping'

import { ActionViewModel } from '../../model/ActionViewModel'
import { AddSignalViewModel } from '../../model/AddSignalViewModel'
import { Select2OptionData } from 'ng2-select2'
import { Ng2FileDropAcceptedFile } from 'ng2-file-drop'

@Component({
    templateUrl: 'add-signal.component.html',
    styles: [`
        .custom-component-drop-zone {
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center; 
            text-align: center;
            justify-content: center;
            border: 1px dashed blue;
        }
    `]
})

export class AddSignalComponent implements OnInit {
    actions: Select2OptionData[]
    currencyPairs: Select2OptionData[]
    actionsOptions: Select2Options = { width: "100%", placeholder: "Select Action" }
    currencyPairsOptions: Select2Options = { width: "100%", placeholder: "Select Instrument" }
    
    private takeProfits: number = 1
    private supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
    private imageShown: boolean = false;
    private currentImage: string = '';
    private model: AddSignalViewModel = { };

    constructor(private _actionsService:ActionsService, 
                private _select2grouping: Select2Grouping,
                private _currencyPairsService: CurrencyPairsService,
                private _signalsService: SignalsService,
                private _http: Http){        
    }

    ngOnInit(): void{
        this._actionsService
            .getAllActions()
            .subscribe(
                actions => this.actions = this._select2grouping.transform(actions, "actionType", "id", "name")
            )

        this._currencyPairsService
            .getAllCurrencyPairs()
            .subscribe(
                currencyPairs => this.currencyPairs = this._select2grouping.transform(currencyPairs, "currencyPairType", "id", "abbreviation")
            )
    }

    private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) { 
        this.showUploadedImage(acceptedFile.file)   
    }

    private currencyPairChanged(e: any){
        this.model.currencyPairID = e.value
    }

    private fileChange(event) {
        let image = event.target.files[0];  
        this.model.image = image;   

        this.showUploadedImage(image)   
    }

    private onSubmit(): void{
        let formData:FormData = new FormData();

        for (var key in this.model) {
            if (this.model.hasOwnProperty(key)) {
                formData.append(key, this.model[key]);                
            }
        }

        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this._signalsService.postSignal(formData, options)
            .subscribe();
    }   

    private showUploadedImage(image: File){
        let fileReader = new FileReader();
        fileReader.onload = () => { 
            // Set and show the image
            this.currentImage = fileReader.result;
            this.imageShown = true;
        };
    
        // Read in the file
        fileReader.readAsDataURL(image);
        this.model.image = image;    
    }
}