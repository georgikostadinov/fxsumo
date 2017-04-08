import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { ActionsModule } from '../actions/actions.module'
import { SharedModule } from '../shared/shared.module'

import { SignalsListComponent } from './list/signals-list.component'
import { AddSignalComponent } from './add signal/add-signal.component'


@NgModule({
    declarations: [
        SignalsListComponent,
        AddSignalComponent
    ],
    imports: [
        ActionsModule,
        BrowserModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'signals', component: SignalsListComponent},
            { path: 'add-signal', component: AddSignalComponent }
        ])
    ]
})

export class SignalsModule{ }