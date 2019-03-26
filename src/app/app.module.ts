import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ProductsService } from './services/products.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { OemsComponent } from './oems/oems.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductsComponent } from './products/products.component';
import { ModelsComponent } from './models/models.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServicesComponent,
    HeaderComponent,
    SearchComponent,
    OemsComponent,
    ProductTypesComponent,
    ProductsComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
    DropDownListModule,
    PopupModule,
    InputsModule,
    AppRoutingModule,
    FormsModule



  ],
  providers: [
    ProductsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
