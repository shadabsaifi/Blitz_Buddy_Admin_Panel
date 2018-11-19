import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login/login.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ChangePasswordComponent } from '../pages/profile/change-password/change-password.component';
import { EditProfileComponent } from '../pages/profile/edit-profile/edit-profile.component';
import { ProfileComponent } from '../pages/profile/profile/profile.component';
import { ResetPasswordComponent } from '../pages/login/reset-password/reset-password.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserManagementComponent } from '../pages/user/user-management/user-management.component';
import { ForgotPasswordComponent } from '../pages/login/forgot-password/forgot-password.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', children: [
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password/:adminId/:secureKey', component: ResetPasswordComponent },
  ]},
  
  { path: 'dashboard', component: DashboardComponent },

  { path: 'profile', children: [
      { path: '', component: ProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
  ]},
  
  { path: 'user',
    children: [
      { path: '', component: UserManagementComponent }
  ]},

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
