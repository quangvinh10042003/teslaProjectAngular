import { AccountComponent } from './pages/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeslaAboutComponent } from './pages/tesla-about/tesla-about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './pages/shop/shop.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './pipes/search.pipe';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailAccessoryComponent } from './pages/detail-accessory/detail-accessory.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchMinPricePipe } from './pipes/search-min-price.pipe';
import { SearchMaxPricePipe } from './pipes/search-max-price.pipe';
import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { HistoryComponent } from './pages/history/history.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DeliveryComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TeslaAboutComponent,
    CustomerComponent,
    ShopComponent,
    SearchPipe,
    DetailComponent,
    DetailAccessoryComponent,
    CartComponent,
    SearchMinPricePipe,
    SearchMaxPricePipe,
    AccountComponent,
    AccountSettingComponent,
    ChangePasswordComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
  ]
})
export class CustomerModule { }