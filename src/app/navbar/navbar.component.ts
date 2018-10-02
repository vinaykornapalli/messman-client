import { Component, OnInit } from '@angular/core';
import {UserService } from './../user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService : UserService) { }
  username : string = "";
  ngOnInit() {
    if(this.userService.isAuthenticated()){
        this.userService.userSubject.subscribe((res)=>{
          this.username = res.username;
        })
    }
  }

}
