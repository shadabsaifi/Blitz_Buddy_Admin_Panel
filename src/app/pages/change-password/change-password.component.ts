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
    delete this.changePasswordForm.value.confPassword;
    this.changePasswordForm.value['adminId'] = this.adminId;
    this.service.post('changePassword', this.changePasswordForm.value, 0).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage']);
        this.service.navigatePage('profile');
      }
      else{
        this.service.error(res['responseMessage'])
      }
    }, err=>{
      this.service.error(err.error['responseMessage']);
    })
  }

}
