import { Component } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html'
})
export class HouseTableComponent extends TableBaseComponent {
  displayedColumns: string[] = ['address', 'rooms', 'value'];

  constructor() { super(); }
}
