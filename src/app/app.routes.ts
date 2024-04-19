import { Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes';

export const routes: Routes = [
    {path: '', redirectTo: ROUTES.PRODUCTS_LIST, pathMatch:'full'},
    {path: ROUTES.PRODUCTS_LIST,title: 'CommerceTools | Products list', loadChildren: () =>
        import('./pages/products-list/products-list.routes').then((m) => m.routes), }
];
