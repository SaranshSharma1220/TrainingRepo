import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ProductsPageComponent } from './core/products-page/products-page.component';
import { HomepageComponent } from './core/homepage/homepage.component';

export const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
];
