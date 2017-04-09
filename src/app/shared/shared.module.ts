import { NgModule } from '@angular/core'
import { GroupByPipe } from './pipes/group-by.pipe'
import { Select2Module } from 'ng2-select2'
import { Select2Grouping } from './select2.grouping'

@NgModule({
    imports: [
        Select2Module
    ],
    declarations: [
        GroupByPipe
    ],
    exports : [
        GroupByPipe
    ],
    providers: [
        Select2Grouping
    ]
})

export class SharedModule{

}