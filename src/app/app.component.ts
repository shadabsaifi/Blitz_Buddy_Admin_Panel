import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlitzBuddyAdmin';

  constructor(private service:ServiceService){

  }

  ngOnInit(){

    var adminId = localStorage.getItem('adminId');
    var token = localStorage.getItem('token');
    if(!adminId || !token){
      this.service.elsePart(404 , "Invalid Token");
    }

  }

}
