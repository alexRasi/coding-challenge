import { Component } from '@angular/core';
import { ProgressSpinerService } from '../../services/progress-spinner/progress-spiner.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private progressSpinerService: ProgressSpinerService) { }

}
