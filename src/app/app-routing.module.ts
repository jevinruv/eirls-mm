import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './ui/layouts/default-layout/default-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleAuthGuard } from './guards/role-auth.guard';
import { ItemRawDetailsComponent } from './item-raw-details/item-raw-details.component';
import { ItemRawListComponent } from './item-raw-list/item-raw-list.component';
import { ItemCompleteDetailsComponent } from './item-complete-details/item-complete-details.component';
import { ItemCompleteListComponent } from './item-complete-list/item-complete-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierOrderDetailComponent } from './supplier-order-detail/supplier-order-detail.component';
import { RoleMmGuard } from './guards/role-mm.guard';
import { SupplierOrderListComponent } from './supplier-order-list/supplier-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },

      { path: 'supplier/new', component: SupplierDetailsComponent, canActivate: [RoleAuthGuard] },
      { path: 'supplier/:id', component: SupplierDetailsComponent },
      { path: 'supplier', component: SupplierListComponent },

      { path: 'supplier-order/new', component: SupplierOrderDetailComponent, canActivate: [RoleAuthGuard] },
      { path: 'supplier-order/:id', component: SupplierOrderDetailComponent },
      { path: 'supplier-order', component: SupplierOrderListComponent },

      { path: 'item-raw/new', component: ItemRawDetailsComponent, canActivate: [RoleMmGuard] },
      { path: 'item-raw/:id', component: ItemRawDetailsComponent },
      { path: 'item-raw', component: ItemRawListComponent },

      { path: 'item-complete/new', component: ItemCompleteDetailsComponent, canActivate: [RoleMmGuard] },
      { path: 'item-complete/:id', component: ItemCompleteDetailsComponent },
      { path: 'item-complete', component: ItemCompleteListComponent },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
