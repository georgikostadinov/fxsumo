import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

//import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component'
import { TeamsService } from './shared/teams.service'
import { ActionsModule } from './actions/actions.module'
import { MainNavigationComponent } from './shared/navigation/main-navigation.component'
import { HeaderNavigationComponent } from './shared/navigation/header-navigation.component'
import { PageNotFoundComponent } from './shared/page-not-found.component'
import { SignalsModule } from './signals/signals.module'

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HeaderNavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ActionsModule,
    SignalsModule,
    RouterModule.forRoot([
      {path: 'page-not-found', component: PageNotFoundComponent},
      { path: '', redirectTo: 'signals', pathMatch: 'full' },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
    ])
  ],
  providers: [ 
    TeamsService,
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
