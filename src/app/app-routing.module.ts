import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { HeaderComponent } from './pages/header/header.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagementComponent } from './pages/user/user-management/user-management.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  
  { path:'', redirectTo:'login', pathMatch:'full' },
  
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'change-password', component:ChangePasswordComponent },
  { path:'edit-profile', component:EditProfileComponent },
  { path:'header', component:HeaderComponent },
  { path:'side-menu', component:SideMenuComponent },
  { path:'footer', component:FooterComponent },
  { path:'profile', component:ProfileComponent },
  { path:'forgot-password', component:ForgotPasswordComponent },
  { path:'reset-password/:adminId/:secureKey', component:ResetPasswordComponent },
  { path:'user',
    children:[{
           path:'',
           component:UserManagementComponent
     }] },
  
  

  { path:'**', component:PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
