import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationModule } from '../geolocation/geolocation.module';
import { DataProcessingService } from './services/data-processing/data-processing.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeolocationModule
  ],
  providers: [
    DataProcessingService
  ]
})
export class DataProcessingModule { }
