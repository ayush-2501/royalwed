import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { FiltersComponent } from './filters/filters.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [VendorsComponent, FiltersComponent, ItemsComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule
  ]
})
export class VendorsModule { }
