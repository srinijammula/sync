import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsercartComponent } from './usercart/usercart.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"userprofile/:username",component:UserprofileComponent,children:[
    {path:"viewproducts",component:ViewproductsComponent},
    {path:"usercart",component:UsercartComponent}
  ]},
  { path: 'admin/:username', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:"",redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
