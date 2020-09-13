import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'otp-page',component:OtpPageComponent},
  {path:'cart',component:CartComponent},
  {path: '**', component:DashboardComponent  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

