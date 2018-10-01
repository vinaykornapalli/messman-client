import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Headers, Http } from '@angular/http';  
import { User , UserLogin } from './models/user';
import { Observable , Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : Http) { }

  public url = environment.apiUrl;
  public authHeaders = new Headers({ 'Content-Type': 'application/json'});
  public user :User = new User();
  public userSubject : Subject<User> = new Subject<User>();

  headers(auth_token: string): Headers {
    this.authHeaders = new Headers({ 'Content-Type': 'application/json' });
    if (auth_token) {
      this.authHeaders.append('Authorization', auth_token);
    }
    return this.authHeaders;
  }

  getAuthentication(username : string , password : string):Promise<any>{
    return  this.http.post(this.url+"login/" ,JSON.stringify({"username":username , "password":password})  ,{headers: this.headers(null)})
     .toPromise()
     .then((res)=>{
         this.user = res.json();
         console.log(res);
        this.userSubject.next(this.user)
        localStorage.setItem("user"  , JSON.stringify(this.user));
     }).catch((error)=>{
       console.log(error);
     })

  }

  isAuthenticated():Boolean{
    if(this.getCurrentUserFromLocalStorage()){
      this.user = this.getCurrentUserFromLocalStorage();
    }
   return this.user.token !=null || this.user.token == ''
  }

  getCurrentUserFromLocalStorage(){
      return JSON.parse(localStorage.getItem("user"));
  }

  logout(){
    this.user = new User();
    localStorage.removeItem("user");
  }
}
