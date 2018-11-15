import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './pages/header/header.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagementComponent } from './pages/user/user-management/user-management.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
