import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { DetailProductComponent } from '../detail-product/detail-product.component';

export const routes: Routes = [
    { path: '', component: ProductsListComponent },
    { path: 'detail', component: DetailProductComponent}
];
