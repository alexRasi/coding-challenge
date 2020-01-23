import { Component, OnInit, Input } from '@angular/core';
import { get } from 'lodash';

/*
  This component exists in order to encapsulate the functionality
  of a table and be used as a superclass. For this reason there
  is no template
*/

@Component({})
export class TableBaseComponent implements OnInit {
  @Input()dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

  getNestedValueSafely(object: any, path: string, fallback: any) {
    return get(object, path, fallback); // fallback to value if doesn't exist
  }

  clearTable() {
    console.log(this.dataSource);
    this.dataSource = [];
    console.log(this.dataSource);
  }

  isTableVisible() {
    if (this.dataSource) {
      // console.log(this.dataSource.length);
      return this.dataSource.length === 0 ? false : true;
    }
    return false;
  }
}
