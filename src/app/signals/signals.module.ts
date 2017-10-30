import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { CurrencyPairsModule } from '../currency-pairs/currency-pairs.module'

import { SignalsListComponent } from './list/signals-list.component'
import { AddSignalComponent } from './add signal/add-signal.component'
import { SignalDetailsComponent } from './signal-details/signal-details.component'

import { Select2Module } from 'ng2-select2'
import { Ng2FileDropModule } from 'ng2-file-drop'

import { SignalsService } from './signals.service'

import { AuthGuardService } from '../shared/services/auth-guard.service'

@NgModule({
    declarations: [
        SignalsListComponent,
        AddSignalComponent,
        SignalDetailsComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        Select2Module,
        CurrencyPairsModule,
        Ng2FileDropModule,
        RouterModule.forChild([
            { path: 'signals', component: SignalsListComponent, canActivate: [ AuthGuardService ]},
            { path: 'add-signal', component: AddSignalComponent, canActivate: [ AuthGuardService ] },
            { path: 'signal/:id', component: SignalDetailsComponent, canActivate: [ AuthGuardService ] }
        ])
    ],
    providers: [
        SignalsService
    ]
})

export class SignalsModule{ }