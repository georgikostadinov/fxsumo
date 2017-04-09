import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { CurrencyPairsModule } from '../currency-pairs/currency-pairs.module'

import { SignalsListComponent } from './list/signals-list.component'
import { AddSignalComponent } from './add signal/add-signal.component'

import { Select2Module } from 'ng2-select2'
import { Ng2FileDropModule } from 'ng2-file-drop'


@NgModule({
    declarations: [
        SignalsListComponent,
        AddSignalComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        Select2Module,
        CurrencyPairsModule,
        Ng2FileDropModule,
        RouterModule.forChild([
            { path: 'signals', component: SignalsListComponent},
            { path: 'add-signal', component: AddSignalComponent }
        ])
    ]
})

export class SignalsModule{ }