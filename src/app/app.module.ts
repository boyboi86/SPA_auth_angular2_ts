import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthenticateRoutingModule } from './app-routing.module';
import { AuthService } from './shared/auth.service';
import { AuthguardService } from './shared/authguard.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
    ],
    imports: [BrowserModule, HttpModule, ReactiveFormsModule, AuthenticateRoutingModule],
    bootstrap: [AppComponent],
    providers:[AuthService, AuthguardService]
})
export class AppModule {}
