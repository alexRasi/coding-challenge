import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [MainPageComponent, NavigationComponent, ToolbarComponent],
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
