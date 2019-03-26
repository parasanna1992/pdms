import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categories } from '../services/categories';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { customers } from '../dashboard/products';
const createFormGroup = dataItem => new FormGroup({
  ProductID: new FormControl(dataItem.ProductID),
  ProductName: new FormControl(dataItem.ProductName, Validators.required),
  UnitPrice: new FormControl(dataItem.UnitPrice),
  UnitsInStock: new FormControl(dataItem.UnitsInStock, Validators.required),
  CategoryID: new FormControl(dataItem.CategoryID)
});

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.css']
})
export class ProductTypesComponent implements OnInit {

  @ViewChild('namesDropDown') private namesDdl;

  private editedRowIndex: number;

  public categories: any[] = categories;
  public names: any[];
  public formGroup: FormGroup;
  defaultAddBtn = true;
  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];
  public gridData: any[] = customers;
  constructor() { }

  ngOnInit() {
  }

  public addNewService() {
    this.defaultAddBtn = !this.defaultAddBtn;
  }

}
