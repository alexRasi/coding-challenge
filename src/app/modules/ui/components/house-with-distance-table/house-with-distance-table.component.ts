import { Component, OnInit } from '@angular/core';

import { get } from 'lodash';
import { TableBaseComponent } from '../table-base/table-base.component';

const housesWithDistanceArray = [
  {
    house: {
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
    distance: 963
  },
  {
    house: {
      coords: {
        lat: 52.5336332,
        lon: 13.4015613
      },
      street: 'Fehrbelliner Straße 23'
    },
    distance: 1405
  },
  {
    house: {
      coords: {
        lat: 52.5269281,
        lon: 13.3984283
      },
      params: {
        rooms: 20,
        value: 7000000
      },
      street: 'Gipsstraße 44'
    },
    distance: 2682
  },
  {
    house: {
      coords: {
        lat: 52.5141632,
        lon: 13.3780111
      },
      params: {
        rooms: 3,
        value: 1500000
      },
      street: 'Cora-Berliner-Straße 22'
    },
    distance: 4878
  },
  {
    house: {
      coords: {
        lat: 52.5013632,
        lon: 13.4174913
      },
      params: {
        rooms: 5,
        value: 1000000
      },
      street: 'Adalbertstraße 13'
    },
    distance: 5687
  },
  {
    house: {
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
    distance: 8801
  },
  {
    house: {
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
    distance: 10008
  },
  {
    house: {
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
    distance: 10153
  },
  {
    house: {
      coords: {
        lat: 52.4888151,
        lon: 13.3147011
      },
      params: {
        value: 1000000
      },
      street: 'Brandenburgische Straße 10'
    },
    distance: 11210
  }
];

@Component({
  selector: 'app-house-with-distance-table',
  templateUrl: './house-with-distance-table.component.html',
  styleUrls: ['./house-with-distance-table.component.css']
})
export class HouseWithDistanceTableComponent extends TableBaseComponent implements OnInit {

  displayedColumns: string[] = ['address', 'rooms', 'value', 'distance'];
  dataSource = housesWithDistanceArray;

  constructor() { super(); }

  ngOnInit() {
  }
}
