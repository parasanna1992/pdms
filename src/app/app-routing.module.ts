import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SearchComponent } from './search/search.component';
import { OemsComponent } from './oems/oems.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ModelsComponent } from './models/models.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'oems',
    component: OemsComponent,
  },
  {
    path: 'productTypes',
    component: ProductTypesComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'models',
    component: ModelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
