import { Component, OnInit } from '@angular/core';
import { customers } from '../search/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public gridData: any[] = customers;
  constructor() { }
  pageSizeNumber: number;
  ngOnInit() {
    this.pageSizeNumber = 10;
  }
  pageValueChange() {
    console.log(this.pageSizeNumber);
  }
}
