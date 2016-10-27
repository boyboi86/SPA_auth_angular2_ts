import { Component } from "@angular/core";
import { AuthService } from  "./auth.service";

@Component({
    selector: 'my-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <!-- if auth is true this will disappear -->
                    <ul class="nav navbar-nav" *ngIf="!isAuth()">

                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>

                    </ul>
                    <!-- if auth is false this will disappear -->
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">

                        <li (click)="onLogout()" style="cursor:pointer"><a>Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->

            </nav>

        </header>
    `
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}
/*if boolean is true*/
  isAuth(){
    return this.authService.isAuthenticated();
  }
/*if boolean is false*/
  onLogout(){
    return this.authService.logout();
  }
}
