import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  secureKey:any
  adminId:any
  resetPasswordForm:FormGroup
  constructor(private router:ActivatedRoute, private service:ServiceService, private fb:FormBuilder) {

    this.resetPasswordForm = this.fb.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      confPassword:['', [Validators.required]]
    })

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.secureKey = params.get('secureKey');
      this.adminId = params.get('adminId');
    })
    this.verifySecureKey()
  }

  verifySecureKey(){
    this.service.showSpinner();
    let data = { secureKey:this.secureKey, adminId:this.adminId }
    this.service.post('verifySecureKey', data, 0).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] != 200){
        this.service.error(res['responseMessage']);
        this.service.navigatePage('login');
      }
    }, err=>{
      this.service.hideSpinner();
      this.service.error(err.error['responseMessage']);
    })
  }

  resetPassword(){
    this.service.showSpinner();
      delete this.resetPasswordForm.value.confPassword;
    this.resetPasswordForm.value['adminId'] = this.adminId;
    this.service.post('resetPassword', this.resetPasswordForm.value, 0).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage']);
      }
      else{
        this.service.error(res['responseMessage'])
      }
      this.service.navigatePage('login');
    }, err=>{
      this.service.hideSpinner();
      this.service.serverError();
    })
  }

}
