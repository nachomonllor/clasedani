import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
//import { MenuComponent } from './menu/menu.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

//import { HomeComponent } from './home/home.component'; 
//import {HttpClietModule} from '.';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
