import { Component, OnInit } from '@angular/core';
import { ProgressSpinerService } from '../../services/progress-spinner/progress-spiner.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private progressSpinerService: ProgressSpinerService) { }

  ngOnInit() {
  }

}
