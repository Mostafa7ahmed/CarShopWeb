import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { WeusComponent } from './Pages/weus/weus.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { AllcarComponent } from './Pages/allcar/allcar.component';
import { CardetailsComponent } from './Pages/cardetails/cardetails.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    title: 'Home', 
    component: HomeComponent,
  },
  {
    path: 'about-us',
    title: 'About Us', 
    component: WeusComponent,
  },
  {
    path: 'contact-us',
    title: 'Contact Us', // Consistent capitalization for titles
    component: ContactusComponent,
  },
  {
    path: 'car-type',
    title: 'Car Types', // Clear title indicating multiple car types
    component: AllcarComponent,
  },
  {
    path: 'car-type/:Brand',
    title: 'Car Type Details', 
    component: AllcarComponent,
  },
  {
    path: 'car-type/body/:Body',
    title: 'Car Type Details', 
    component: AllcarComponent,
  },
  {
    path: 'car-details/:idCar',
    title: 'Car Details', // Consistent and descriptive title
    component: CardetailsComponent,
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotfoundComponent,
  },
];
