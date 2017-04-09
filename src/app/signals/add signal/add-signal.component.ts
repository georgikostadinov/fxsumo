import { Component, OnInit } from '@angular/core'

import { ActionsService } from '../../actions/actions.service'
import { CurrencyPairsService } from '../../currency-pairs/currency-pairs.service'
import { Select2Grouping } from '../../shared/select2.grouping'

import { ActionViewModel } from '../../model/ActionViewModel'
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
        }
    `]
})

export class AddSignalComponent implements OnInit {
    actions: Select2OptionData[]
    currencyPairs: Select2OptionData[]
    actionsOptions: Select2Options = { width: "100%", placeholder: "Select Action" }
    currencyPairsOptions: Select2Options = { width: "100%", placeholder: "Select Instrument" }
    
    private supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
    private imageShown: boolean = false;
    private currentImage: string = '';

    constructor(private _actionsService:ActionsService, 
                private _select2grouping: Select2Grouping,
                private _currencyPairsService: CurrencyPairsService){        
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
 
      // Load the image in
        let fileReader = new FileReader();
        fileReader.onload = () => { 
            // Set and show the image
            this.currentImage = fileReader.result;
            this.imageShown = true;
        };
    
        // Read in the file
        fileReader.readAsDataURL(acceptedFile.file);
    }

    fileChange(event) {
        let fileList: FileList = event.target.files;
        let file = fileList[0]

        let fileReader = new FileReader();
        fileReader.onload = () => { 
            // Set and show the image
            this.currentImage = fileReader.result;
            this.imageShown = true;
        };
    
        // Read in the file
        fileReader.readAsDataURL(file);
    }
}