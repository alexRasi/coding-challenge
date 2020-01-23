import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HousesNearAddressComponent } from './components/content-pages/houses-near-address/houses-near-address.component';
import { HousesNearAddressPageComponent } from './components/content-pages/houses-near-address-page/houses-near-address-page.component';
// tslint:disable-next-line: max-line-length
import { FilteredHousesByRoomsPageComponent } from './components/content-pages/filtered-houses-by-rooms-page/filtered-houses-by-rooms-page.component';
import { HousesLackingDataPageComponent } from './components/content-pages/houses-lacking-data-page/houses-lacking-data-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavigationComponent,
    ToolbarComponent,
    HousesNearAddressComponent,
    HousesNearAddressPageComponent,
    FilteredHousesByRoomsPageComponent,
    HousesLackingDataPageComponent,
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class UiModule { }
