import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-static-management',
  templateUrl: './static-management.component.html',
  styleUrls: ['./static-management.component.css']
})
export class StaticManagementComponent implements OnInit {

  data:any = { }
  constructor(private service:ServiceService) {  }

  ngOnInit() {
    this.getStaticContent();
  }

  getStaticContent(){

    this.service.showSpinner();
    this.service.get('getAllStaticContent', 1).subscribe(res=>{
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.data = res['result'];
        console.log('====================================');
        console.log(this.data);
        console.log('====================================');
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
