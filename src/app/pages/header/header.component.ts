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
  constructor(private service:ServiceService) { 

  }

  ngOnInit() {

    this.adminId = localStorage.getItem('adminId');
    this.getAdminDetail();
    
  }

  getAdminDetail(){

    this.service.get('getAdminDetail?adminId='+this.adminId, 1).subscribe(res=>{
      if(res['responseCode'] == 200 || res['responseCode'] == 201){
        this.data = res['result'];
      }
      else{
        this.service.elsePart(res['responseCode'], res['responseMessage']);
      }


    }, err=>{
      this.service.serverError();
    })

  }

  signout(){
    
    this.service.success('You have successfully signout');
    this.service.navigatePage('login');
    this.service.clearLocalStorage();

  }

}
