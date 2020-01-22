import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationApiService } from './services/geolocation-api/geolocation-api.service';
import { HttpClientModule } from '@angular/common/http';



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
