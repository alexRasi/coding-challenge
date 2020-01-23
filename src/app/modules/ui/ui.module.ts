import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HousesNearAddressPageComponent } from './components/content-pages/houses-near-address-page/houses-near-address-page.component';
import { HousesLackingDataPageComponent } from './components/content-pages/houses-lacking-data-page/houses-lacking-data-page.component';
// tslint:disable-next-line: max-line-length
import { FilteredHousesByRoomsPageComponent } from './components/content-pages/filtered-houses-by-rooms-page/filtered-houses-by-rooms-page.component';
import { HouseWithDistanceTableComponent } from './components/house-with-distance-table/house-with-distance-table.component';
import { HouseTableComponent } from './components/house-table/house-table.component';

import { ProgressSpinerService } from './services/progress-spinner/progress-spiner.service';

@NgModule({
  declarations: [
    MainPageComponent,
    NavigationComponent,
    ToolbarComponent,
    HousesNearAddressPageComponent,
    FilteredHousesByRoomsPageComponent,
    HousesLackingDataPageComponent,
    HouseWithDistanceTableComponent,
    HouseTableComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ProgressSpinerService
  ],
  exports: [
    MainPageComponent
  ]
})
export class UiModule { }
