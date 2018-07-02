import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import {BrowsecarsComponent } from "./browsecars/browsecars.component";
import {ContactusComponent } from "./contactus/contactus.component";
import { NavbarComponent } from "./navbar/navbar.component";
import {ConfirmationComponent } from "./confirmation/confirmation.component";
import {LandComponent } from "./land/land.component";


export const AppRoutes = [

    {path: '', component: LandComponent},
    {path: 'land', component: LandComponent},
    {path: 'home', component: HomeComponent},
    {path: 'aboutus',component: AboutusComponent },
    {path: 'browsecars', component: BrowsecarsComponent },
    {path: 'contactus', component: ContactusComponent},
    {path: 'confirmation', component:ConfirmationComponent},
    {path: 'navbar', component: NavbarComponent},
    
  

   
];

