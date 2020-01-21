import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HousesFetchingService } from './services/housesFetching/houses-fetching.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HousesFetchingService
  ]
})
export class DataFetchingModule { }
