import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [],
/*   imports: [
    CommonModule
  ], */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
/*     exports: [CommonModule] */
})
export class AppRoutingModule { }
