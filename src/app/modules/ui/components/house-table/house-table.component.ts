import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';


@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.css']
})
export class HouseTableComponent extends TableBaseComponent implements OnInit {
  displayedColumns: string[] = ['address', 'rooms', 'value'];

  constructor() { super(); }

  ngOnInit() {
  }

}
