import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from './products.service';
import { categories } from './categories';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { customers } from '../dashboard/products';
// tslint:disable-next-line:one-variable-per-declaration
const createFormGroup = dataItem => new FormGroup({
    ProductID: new FormControl(dataItem.ProductID),
    ProductName: new FormControl(dataItem.ProductName, Validators.required),
    UnitPrice: new FormControl(dataItem.UnitPrice),
    UnitsInStock: new FormControl(dataItem.UnitsInStock, Validators.required),
    CategoryID: new FormControl(dataItem.CategoryID)
});


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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
