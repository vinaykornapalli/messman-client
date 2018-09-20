import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Headers, Http } from '@angular/http';  
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : Http) { }

  public url = environment.apiUrl;
  public authHeaders = new Headers({ 'Content-Type': 'application/json'});



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
         res = res.json();
         console.log(res);
     }).catch((error)=>{
       console.log(error);
     })

  }

}
