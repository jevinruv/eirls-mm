import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { httpAuthInterceptorProvider } from './auth-interceptor';
import { httpLoaderInterceptorProvider } from './loader-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { LoginLayoutComponent } from './ui/layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './ui/layouts/default-layout/default-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemRawDetailsComponent } from './item-raw-details/item-raw-details.component';
import { ItemRawListComponent } from './item-raw-list/item-raw-list.component';
import { ItemCompleteDetailsComponent } from './item-complete-details/item-complete-details.component';
import { ItemCompleteListComponent } from './item-complete-list/item-complete-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierOrderDetailComponent } from './supplier-order-detail/supplier-order-detail.component';
import { SupplierOrderListComponent } from './supplier-order-list/supplier-order-list.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SupplierDetailsComponent,
    SupplierListComponent,
    NavbarComponent,
    LoginComponent,
    LoaderComponent,
    LoginLayoutComponent,
    DefaultLayoutComponent,
    ItemRawDetailsComponent,
    ItemRawListComponent,
    ItemCompleteDetailsComponent,
    ItemCompleteListComponent,
    DashboardComponent,
    SupplierOrderDetailComponent,
    SupplierOrderListComponent,
    SalesOrderListComponent,
    SalesOrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [httpAuthInterceptorProvider, httpLoaderInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
