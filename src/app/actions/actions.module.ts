import { NgModule } from '@angular/core'

import { ActionsService } from './actions.service'
import { ActionsApi } from './ActionsApi'


@NgModule({
    providers: [
        ActionsApi,
        ActionsService
    ]
})

export class ActionsModule{ }