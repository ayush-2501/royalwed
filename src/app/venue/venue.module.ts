import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueComponent } from './venue.component';
import { BanquetHallComponent } from './banquet-hall/banquet-hall.component';
import { FiltersComponent } from './filters/filters.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [VenueComponent, BanquetHallComponent, FiltersComponent, ItemsComponent],
  imports: [
    CommonModule,
    VenueRoutingModule,
  ],
})
export class VenueModule { }
