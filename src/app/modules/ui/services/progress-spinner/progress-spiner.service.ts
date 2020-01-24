import { Injectable } from '@angular/core';

@Injectable()
export class ProgressSpinerService {

  public spinerVisibility = false;

  constructor() { }

  showSpinner() {
    this.spinerVisibility = true;
  }

  hideSpinner() {
    this.spinerVisibility = false;
  }
}
