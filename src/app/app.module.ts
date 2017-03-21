import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { TeamsService } from './shared/teams.service'
import { MainNavigationComponent } from './shared/navigation/main-navigation.component'
import { HeaderNavigationComponent } from './shared/navigation/header-navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TeamsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
