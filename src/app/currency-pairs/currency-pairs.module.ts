import { NgModule } from '@angular/core'

import { CurrencyPairsService } from './currency-pairs.service'


@NgModule({
    providers: [
        CurrencyPairsService
    ]
})

export class CurrencyPairsModule{ }