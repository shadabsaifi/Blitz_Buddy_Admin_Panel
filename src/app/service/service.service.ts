import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  baseUrl:any = environment.baseUrl;
  headers:any;
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
      return this.http.post(this.baseUrl+url, data, {headers:this.headers})
    return this.http.post(this.baseUrl+url, data)
  }

  get(url, isHeader){
    if(isHeader == 1)
      return this.http.get(this.baseUrl+url, {headers:this.headers})
    return this.http.get(this.baseUrl+url)
  }

  success(msg){
    this.toastr.success(msg, '', {
      timeOut: 900 });
  }

  error(msg){
    this.toastr.error(msg, "", {
      timeOut: 900 });
  }

  serverError(){
    this.toastr.error('Server not responding.');
  }

  showSpinner(){
    this.spinner.show()
  }

  hideSpinner(){
    this.spinner.hide()
  }

  clearLocalStorage(){
    localStorage.removeItem('adminId');
    localStorage.removeItem('token');
  }

  elsePart(code, message){
    if( code == 404 || code == 401){
      this.navigatePage('login');
      this.clearLocalStorage();
      
    }
    return this.error(message)
  }

}
