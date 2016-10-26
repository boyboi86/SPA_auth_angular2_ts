import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes  = [
  { path:'', redirectTo:'/signup', pathMatch:'full'},
  { path:'signup', component: SignupComponent},
  { path:'signin', component: SigninComponent},
  { path:'protected', component: ProtectedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthenticateRoutingModule { }
