import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { DetailProductComponent } from '../detail-product/detail-product.component';

export const routes: Routes = [
  {
    path: '',
    title: 'CommerceTools | Products list',
    component: ProductsListComponent,
  },
  {
    path: 'detail',
    title: 'CommerceTools | Products Detail',
    component: DetailProductComponent,
  },
];
