import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adminId:any
  data:any = { }
  constructor( private service:ServiceService ) { }

  ngOnInit() {
    this.adminId = localStorage.getItem('adminId');
    this.getAdminDetail();
  }

  getAdminDetail(){
    
    this.service.showSpinner();
    this.service.get('getAdminDetail?adminId='+this.adminId, 1).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.data = res['result'];
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
