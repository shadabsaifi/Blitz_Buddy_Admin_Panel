import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isActive:any
  constructor() { }

  ngOnInit() {

    this.isActive = window.location.href.split('/')[3];
  }

}
