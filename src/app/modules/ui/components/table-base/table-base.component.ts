import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';

/*
  This component exists in order to encapsulate the functionality
  of a table and be used as a superclass. For this reason there
  is no template
*/

@Component({})
export class TableBaseComponent implements OnInit {
  dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

  getNestedValueSafely(object: any, path: string, fallback: any) {
    return get(object, path, fallback); // fallback to value if doesn't exist
  }

  clearTable() {
    this.dataSource = [];
  }

  isTableVisible() {
    return this.dataSource.length === 0 ? false : true;
  }
}
