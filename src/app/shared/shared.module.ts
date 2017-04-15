import { NgModule } from '@angular/core'
import { Select2Module } from 'ng2-select2'
import { FormsModule } from '@angular/forms'

import { GroupByPipe } from './pipes/group-by.pipe'

import { SimpleTinyComponent } from './simple-tiny.component'

import { Select2Grouping } from './select2.grouping'

@NgModule({
    imports: [
        Select2Module,
        FormsModule
    ],
    declarations: [
        GroupByPipe,
        SimpleTinyComponent
    ],
    exports : [
        GroupByPipe,
        SimpleTinyComponent,
        FormsModule
    ],
    providers: [
        Select2Grouping
    ]
})

export class SharedModule{

}