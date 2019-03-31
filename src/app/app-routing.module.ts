import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './ui/layouts/default-layout/default-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleAuthGuard } from './guards/role-auth.guard';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'supplier/new', component: SupplierDetailsComponent, canActivate: [RoleAuthGuard] },
      { path: 'supplier/:id', component: SupplierDetailsComponent },
      { path: 'supplier', component: SupplierListComponent },

      { path: 'item/new', component: ItemDetailsComponent, canActivate: [RoleAuthGuard] },
      { path: 'item/:id', component: ItemDetailsComponent },
      { path: 'item', component: SupplierListComponent },
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
