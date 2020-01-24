import { Component, OnInit, Input } from '@angular/core';

import { TableBaseComponent } from '../table-base/table-base.component';

@Component({
  selector: 'app-house-with-distance-table',
  templateUrl: './house-with-distance-table.component.html',
  styleUrls: ['./house-with-distance-table.component.css']
})
export class HouseWithDistanceTableComponent extends TableBaseComponent implements OnInit {
  displayedColumns: string[] = ['address', 'rooms', 'value', 'distance'];

  constructor() { super(); }

  ngOnInit() {
  }
}
