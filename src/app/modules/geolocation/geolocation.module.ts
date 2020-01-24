import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GeolocationApiService } from './services/geolocation-api/geolocation-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GeolocationApiService
  ]
})
export class GeolocationModule { }
