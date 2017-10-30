import { Component, OnInit } from '@angular/core'

import { AuthService } from '../services/auth.service'
import { User } from 'oidc-client'

@Component({
    selector: "main-navigation",
    templateUrl: "main-navigation.component.html"
})

export class MainNavigationComponent implements OnInit{
    private user: User
    private loadedUserSub: any
    private isAdmin: boolean

    constructor(private authService:AuthService){
    }

    public ngOnInit():void{
        this.loadedUserSub = this.authService.userLoadededEvent
        .subscribe(user => {
            this.user = user;
        });
        this.authService.getUser();
        this.authService.hasRole("admin")
            .subscribe((hasAdminRole) => this.isAdmin = hasAdminRole)
    }

    public startSignoutMainWindow(): void{ 
        this.authService.startSignoutMainWindow();
        //this.authService.removeUser();
    }

    ngOnDestroy(){
    if(this.loadedUserSub.unsubscribe()){
      this.loadedUserSub.unsubscribe();
    }
  }
}