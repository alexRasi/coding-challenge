import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeolocationModule } from './modules/geolocation/geolocation.module';
import { DataFetchingModule } from './modules/data-fetching/data-fetching.module';
import { DataProcessingModule } from './modules/data-processing/data-processing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './modules/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeolocationModule,
    DataFetchingModule,
    DataProcessingModule,
    UiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
