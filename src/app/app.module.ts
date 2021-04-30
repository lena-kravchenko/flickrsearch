import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { CopyrightsComponent } from './copyrights/copyrights.component';
//import { LoginComponent } from './auth/components/login/login.component';
//import { RegisterComponent } from './auth/components/register/register.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent,
    CopyrightsComponent,
//    LoginComponent,
//    RegisterComponent
  ],
  imports: [
    BrowserModule,
  //  RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
