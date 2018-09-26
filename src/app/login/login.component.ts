import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User , UserLogin } from './../models/user';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService : UserService , public router : Router) { }
  
  username :string = "";
  password : string = "";
  
  ngOnInit() {
    this.userService.getAuthentication("messadmin" , "yaniv321");
  }

  submitLogin(){
    this.userService.getAuthentication(this.username , this.password).then((res)=>{
        this.router.navigate(['/menu'])
    })
    .catch(()=>{
      //handle the errors over here show messages

    })
  }

}
