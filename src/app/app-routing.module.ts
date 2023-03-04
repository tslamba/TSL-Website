import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashProductComponent } from './pages/dashboard/dash-product/dash-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnquiryComponent } from './pages/dashboard/enquiry/enquiry.component';
import { HomeComponent } from './pages/home/home.component';
import { NewHomeComponent } from './pages/new-home/new-home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/enquiry',
    component: EnquiryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/products',
    component: DashProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
