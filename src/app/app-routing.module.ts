import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'venue', loadChildren: () => import('./venue/venue.module').then(m => m.VenueModule) },
  { path: 'vendors', loadChildren: () => import('./vendors/vendors.module').then(m => m.VendorsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
