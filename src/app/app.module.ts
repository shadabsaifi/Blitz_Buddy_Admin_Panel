import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';
import { ChangePasswordComponent } from './pages/profile/change-password/change-password.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { FooterComponent } from './pages/sides/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { HeaderComponent } from './pages/sides/header/header.component';
import { SideMenuComponent } from './pages/sides/side-menu/side-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagementComponent } from './pages/user/user-management/user-management.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    FooterComponent,
    ProfileComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    UserManagementComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2ImgMaxModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
