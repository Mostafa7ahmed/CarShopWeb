import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { WeusComponent } from './Pages/weus/weus.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { AllcarComponent } from './Pages/allcar/allcar.component';
import { CardetailsComponent } from './Pages/cardetails/cardetails.component';

export const routes: Routes = [
      
    { path: '', redirectTo: 'Home', pathMatch: 'full' },

  {
    path: 'Home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    title: 'about-us',
    component: WeusComponent,
  },
  {
    path: 'contact-us',
    title: 'contact-us',
    component: ContactusComponent,
  },
  {
    path: 'car-type',
    title: 'car-type',
    component: AllcarComponent,
  },
  {
    path: 'car-details',
    title: 'car-details',
    component: CardetailsComponent,
  }
];
