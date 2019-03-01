import { Component, OnInit } from '@angular/core';
import { customers } from './products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public gridData: any[] = customers;
  constructor() { }

  ngOnInit() {
  }

}
