import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
declare var $:any

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  data:any = { docs:[] }
  sendData:any = { };
  page:Number = 1;
  searchWord:any = ''
  requestType:any
  userData:any = { }
  constructor(private service:ServiceService) { }

  ngOnInit() {

    this.getAllUser();
  }

  getAllUser(){
    let data = {
      page:this.page,
      search:this.searchWord
    }
    this.service.post('getAllUser', data, 1).subscribe(res=>{
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
      this.service.serverError();
    })
  }

  deleteOrBlock(userId, type){
    this.requestType = type
    if(type == 'delete'){
      $('#deleteUser').modal('show')
      this.sendData = { userId:userId, requestType:type }
    }
    else{
      $('#unblockUser').modal('show')
      this.sendData = { userId:userId, requestType:type }
    }
  }

  yes(id){
    $(id).modal('hide');
    this.service.showSpinner();
    this.service.post('actionOnUser', this.sendData, 1).subscribe(res=>{
    
      this.service.hideSpinner();
      if(res['responseCode'] == 200){
        this.service.success(res['responseMessage'])
        this.getAllUser();
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

  viewUser(userId){
    $('#viewUser').modal('show')
    this.data.docs.map((x)=>{
      if(x._id == userId){
        this.userData = x;
      }
    })
  }

  pageChange(page){
    this.page = page
    this.getAllUser();
  }

  search() {
     this.getAllUser();
  }
    

  


}
