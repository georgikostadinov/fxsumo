import { Component, OnInit } from '@angular/core'

import { ActionsService } from '../../actions/actions.service'
import { CurrencyPairsService } from '../../currency-pairs/currency-pairs.service'
import { Select2Grouping } from '../../shared/select2.grouping'

import { ActionViewModel } from '../../model/ActionViewModel'
import { Select2OptionData } from 'ng2-select2'

@Component({
    templateUrl: 'add-signal.component.html'
})

export class AddSignalComponent implements OnInit {
    actions: Select2OptionData[]
    currencyPairs: Select2OptionData[]
    actionsOptions: Select2Options = { width: "100%", placeholder: "Select Action" }
    currencyPairsOptions: Select2Options = { width: "100%", placeholder: "Select Instrument" }

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
}