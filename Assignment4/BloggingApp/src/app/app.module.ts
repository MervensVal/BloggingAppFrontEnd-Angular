import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorrouteComponent } from './views/errorroute/errorroute.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostcomponentComponent } from './component/postcomponent/postcomponent.component';
import { PostinstanceComponent } from './component/postinstance/postinstance.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ErrorrouteComponent,
    PostcomponentComponent,
    PostinstanceComponent,
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
