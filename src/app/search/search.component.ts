import { Component, OnInit } from '@angular/core';
import { customers } from '../dashboard/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public gridData: any[] = customers;
  constructor() { }

  ngOnInit() {
  }



}
