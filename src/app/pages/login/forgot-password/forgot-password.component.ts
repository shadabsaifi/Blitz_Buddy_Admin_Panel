import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm:FormGroup
  constructor(private service:ServiceService, private fb:FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email:['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]]
    })
  }

  forgotPassword(){
    this.service.showSpinner();
    this.forgotPasswordForm.value['link'] = "http://localhost:4200/login/reset-password/";
    this.service.post('forgotPassword', this.forgotPasswordForm.value, 0).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage']);
      }
      else{
        this.service.error(res['responseMessage']);
      }
    }, err=>{
      this.service.hideSpinner();
      this.service.serverError();

    })
  }

}
