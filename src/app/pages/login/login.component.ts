import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  isChecked:Boolean = false

  constructor(private service:ServiceService, private fb:FormBuilder) { 

    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
    this.isChecked = $('#chkSelect:checked').val()?true:false;
    if(this.isChecked){
      this.loginForm.controls['email'].setValue(localStorage.getItem('email'));
      this.loginForm.controls['password'].setValue(localStorage.getItem('password'));
    }
  }

  login(){
    this.service.showSpinner();
    if(this.isChecked){
      localStorage.setItem('email', this.loginForm.value.email);
      localStorage.setItem('password', this.loginForm.value.password);
    }
    this.service.post('login', this.loginForm.value, 0).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage']);
        localStorage.setItem('adminId', res['result']._id);
        localStorage.setItem('token', res['result'].token);
        this.service.navigatePage('dashboard');
      }
      else{
        this.service.elsePart(res['responseCode'], res['responseMessage']);
      }
    }, err=>{
      this.service.hideSpinner();
        return this.service.serverError();
    })
  }

  select(event){
    this.isChecked = event.target.checked;
  }


}
