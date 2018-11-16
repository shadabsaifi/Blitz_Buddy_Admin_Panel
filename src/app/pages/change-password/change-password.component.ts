import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm:FormGroup;
  adminId:any
  constructor(private service:ServiceService, private fb:FormBuilder) {

    this.changePasswordForm = this.fb.group({
      oldPassword:['', [Validators.required, Validators.minLength(8)]],
      newPassword:['', [Validators.required, Validators.minLength(8)]],
      confPassword:['', [Validators.required]]
    })

  }

  ngOnInit() {

    this.adminId = localStorage.getItem('adminId');

  }

  changePassword(){
    this.service.showSpinner();
    delete this.changePasswordForm.value.confPassword;
    this.changePasswordForm.value['adminId'] = this.adminId;
    this.service.post('changePassword', this.changePasswordForm.value, 0).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage']);
        this.service.navigatePage('profile');
      }
      else if(res['responseCode'] == 404 || res['responseCode'] == 401){
        this.service.error(res['responseMessage'])
        this.service.navigatePage('login');
      }
      else{
        this.service.error(res['responseMessage'])
      }
      
    }, err=>{
      this.service.hideSpinner();
      this.service.serverError();
    })
  }

}
