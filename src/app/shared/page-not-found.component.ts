import { Component, OnInit } from '@angular/core'
import { ActionsApi } from '../actions/ActionsApi'

import { ActionViewModel } from '../model/ActionViewModel'

@Component({
    templateUrl: 'page-not-found.component.html'
})


export class PageNotFoundComponent implements OnInit{
    actions: ActionViewModel[]
    error: String

    constructor(private _actionsService:ActionsApi){        
    }

    ngOnInit(): void{
        this._actionsService
        .actionsGet()
        .subscribe(
            actions => this.actions = actions,
            error => this.error = <any>error
        )
    }
 }