import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from '../table-base/table-base.component';


const housesDataSource = [
  {
    coords: {
      lat: 52.4896432,
      lon: 13.3329913
    },
    params: {
      rooms: 8,
      value: 800000
    },
    street: 'Jenaer Straße 8'
  },
  {
    coords: {
      lat: 52.5418739,
      lon: 13.4057378
    },
    params: {
      rooms: 10,
      value: 4000000
    },
    street: 'Eberswalder Straße 55'
  },
  {
    coords: {
      lat: 52.53931,
      lon: 13.4206011
    },
    params: {
      rooms: 12,
      value: 5000000
    },
    street: 'Danziger Straße 66'
  },
  {
    coords: {
      lat: 52.4863064,
      lon: 13.3385237
    },
    params: {
      rooms: 12,
      value: 2300000
    },
    street: 'Innsbrucker Straße 8'
  },
  {
    coords: {
      lat: 52.4858232,
      lon: 13.4215013
    },
    params: {
      rooms: 18,
      value: 2000000
    },
    street: 'Hermannstraße 1'
  },
  {
    coords: {
      lat: 52.5269281,
      lon: 13.3984283
    },
    params: {
      rooms: 20,
      value: 7000000
    },
    street: 'Gipsstraße 44'
  }
];

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.css']
})
export class HouseTableComponent extends TableBaseComponent implements OnInit {
  displayedColumns: string[] = ['address', 'rooms', 'value'];
  dataSource = housesDataSource;

  constructor() { super(); }

  ngOnInit() {
  }

}
