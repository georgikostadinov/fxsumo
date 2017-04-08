import { Component, OnInit } from '@angular/core';
import { MainNavigationComponent } from './shared/navigation/main-navigation.component'

import { TeamsService } from './shared/teams.service';
import { ITeam } from './shared/team'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent implements OnInit {
  title = 'app works!';
  teams: ITeam[];
  error: String;

  constructor(private _teamsSevice: TeamsService){ }

  ngOnInit(): void {
    this.title = "new title";
    console.log(this._teamsSevice);
    /*this._teamsSevice.getAllTeams().subscribe(
      teams => this.teams = teams,
      error => this.error = <any>error
    )*/
  }
}
