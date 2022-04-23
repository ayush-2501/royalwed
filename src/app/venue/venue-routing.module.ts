import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanquetHallComponent }from './banquet-hall/banquet-hall.component'
import { VenueComponent } from './venue.component';

const routes: Routes = [
{ path: '', component: VenueComponent },
{ path: 'banquethall', component: BanquetHallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
