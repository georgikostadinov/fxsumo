import { NgModule } from '@angular/core'
import { GroupByPipe } from './pipes/group-by.pipe'

@NgModule({
    declarations: [
        GroupByPipe
    ],
    exports : [
        GroupByPipe
    ]
})

export class SharedModule{

}