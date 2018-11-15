import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminId:any
  data:any = {  }
  isActive:any
  constructor(private service:ServiceService) { 

  }

  ngOnInit() {
    this.adminId = localStorage.getItem('adminId');
    this.getAdminDetail();
    this.isActive = window.location.href.split('/')[3];
    
  }

  getAdminDetail(){
    this.service.get('getAdminDetail?adminId='+this.adminId, 0).subscribe(res=>{
      if(res['responseCode'] == 200){
        this.data = res['result'];
      }
      else if(res['responseCode'] == 404){
        this.service.error(res['responseMessage'])
        this.service.navigatePage('login');
      }

    }, err=>{
      this.service.error(err.error['responseMessage'])
    })
  }

}
