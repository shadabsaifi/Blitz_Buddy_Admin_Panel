import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    
  }

  forgotPassword(){
    this.service.navigatePage('reset-password')
  }

}
