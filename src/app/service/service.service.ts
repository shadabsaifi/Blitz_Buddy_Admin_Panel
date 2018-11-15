import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  headers:any
  baseUrl:any = 'http://localhost:3000/admin/';
  constructor( private routetingPage:Router, private http:HttpClient, private toastr:ToastrService, private spinner:NgxSpinnerService) {

    this.headers = new HttpHeaders({

      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token') 
    
    })

  }


  navigatePage(page){
    this.routetingPage.navigate(['/'+page])
  }

  post(url, data, isHeader){
    if(isHeader == 1)
      return this.http.post(this.baseUrl+url, data, this.headers)
    return this.http.post(this.baseUrl+url, data)
  }

  get(url, isHeader){
    if(isHeader == 1)
      return this.http.get(this.baseUrl+url, this.headers)
    return this.http.get(this.baseUrl+url)
  }

  success(msg){
    this.toastr.success(msg);
  }

  error(msg){
    this.toastr.error(msg);
  }
  showSpinner(){
    this.spinner.show()
  }

  hideSpinner(){
    this.spinner.hide()
  }

}
