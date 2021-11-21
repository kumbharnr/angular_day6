import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:"/home", pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductComponent,canActivate:[AuthGuardService]},
  {path:'products1/:id', component:ProductComponent, canActivate:[AuthGuardService]},
  {path:'userlogin', component:UserLoginComponent,canActivate:[AuthGuardService]},
  {path:'contact', component:ContactComponent},
  {path:'**', component:NoPageFoundComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
