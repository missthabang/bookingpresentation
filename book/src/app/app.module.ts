import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';



import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowsecarsComponent } from './browsecars/browsecars.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './App.Routes.Module';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LandComponent } from './land/land.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BrowsecarsComponent,
    ContactusComponent,
    NavbarComponent,
    ConfirmationComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ]
  ,
  exports:[RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
