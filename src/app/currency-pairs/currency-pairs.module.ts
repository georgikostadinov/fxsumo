import { NgModule } from '@angular/core'

import { CurrencyPairsService } from './currency-pairs.service'
import { CurrencyPairsApi } from './CurrencyPairsApi'


@NgModule({
    providers: [
        CurrencyPairsApi,
        CurrencyPairsService
    ]
})

export class CurrencyPairsModule{ }