import { NgModule } from '@angular/core'
import { Select2Module } from 'ng2-select2'
import { FormsModule } from '@angular/forms'

import { GroupByPipe } from './pipes/group-by.pipe'
import { SafePipe } from './pipes/safe.pipe'

import { SimpleTinyComponent } from './simple-tiny.component'

import { Select2Grouping } from './select2.grouping'
import { YoutubeService } from './services/youtube.service'

@NgModule({
    imports: [
        Select2Module,
        FormsModule
    ],
    declarations: [
        GroupByPipe,
        SafePipe,
        SimpleTinyComponent
    ],
    exports : [
        GroupByPipe,
        SafePipe,
        SimpleTinyComponent,
        FormsModule
    ],
    providers: [
        Select2Grouping,
        YoutubeService
    ]
})

export class SharedModule{

}