import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

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
import { ItemDetailsComponent } from './item-details/item-details.component';


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
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [httpAuthInterceptorProvider, httpLoaderInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
