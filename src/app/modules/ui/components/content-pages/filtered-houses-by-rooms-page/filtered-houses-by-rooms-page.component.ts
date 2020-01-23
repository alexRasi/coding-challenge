import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtered-houses-by-rooms-page',
  templateUrl: './filtered-houses-by-rooms-page.component.html',
  styleUrls: ['./filtered-houses-by-rooms-page.component.css']
})
export class FilteredHousesByRoomsPageComponent implements OnInit {
  rooms = 5;

  constructor() { }

  ngOnInit() {
  }

}
