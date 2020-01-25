import { Component } from '@angular/core';

import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-house-with-distance-table',
  templateUrl: './house-with-distance-table.component.html'
})
export class HouseWithDistanceTableComponent extends TableBaseComponent {
  displayedColumns: string[] = ['address', 'rooms', 'value', 'distance'];

  constructor() { super(); }
}
