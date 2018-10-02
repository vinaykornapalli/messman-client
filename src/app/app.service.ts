import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Headers, Http } from '@angular/http';  
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: Http , public userService:UserService) { 

  }

  public url = environment.apiUrl;
  public authHeaders = new Headers({ 'Content-Type': 'application/json'});



  headers(auth_token: string): Headers {
    this.authHeaders = new Headers({ 'Content-Type': 'application/json' });
    if (auth_token) {
      this.authHeaders.append('Authorization', `Token ${auth_token}`);
    }
    return this.authHeaders;
  }
  
  createSchecule(data:Array<any>):Promise<any>{
    return this.http.post(this.url+'schedule/' , JSON.stringify(data) ,{headers:this.headers(this.userService.user.token)})
    .toPromise()
    .then((res)=>{
      res=res.json()
      console.log(res["body"]);
      return res["body"];
    })
    .catch((err)=>{
      console.log(err);
    })

  }
}
