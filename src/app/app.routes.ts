import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/_layout/layout.component';
import { PrivateLayoutComponent } from './private/_layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { MyCoinsComponent } from './pages/my-coins/my-coins.component';
import { RatesComponent } from './pages/rates/rates.component';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'exchange',
        component: ExchangeComponent,
      },
      {
        path: 'my-coins',
        component: MyCoinsComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
