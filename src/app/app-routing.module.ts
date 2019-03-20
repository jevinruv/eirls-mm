import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'supplier/new', component: SupplierDetailsComponent },
  { path: 'supplier/:id', component: SupplierDetailsComponent },
  { path: 'supplier', component: SupplierListComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
