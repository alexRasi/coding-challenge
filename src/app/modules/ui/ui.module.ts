import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HousesNearAddressPageComponent } from './components/content-pages/houses-near-address-page/houses-near-address-page.component';
import { HousesLackingDataPageComponent } from './components/content-pages/houses-lacking-data-page/houses-lacking-data-page.component';
// tslint:disable-next-line: max-line-length
import { FilteredHousesByRoomsPageComponent } from './components/content-pages/filtered-houses-by-rooms-page/filtered-houses-by-rooms-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavigationComponent,
    ToolbarComponent,
    HousesNearAddressPageComponent,
    FilteredHousesByRoomsPageComponent,
    HousesLackingDataPageComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class UiModule { }
