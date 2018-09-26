

export class User{
  user_id : string;
  username : string ;
  email : string;
  is_staff: Boolean ;
  is_active : Boolean;
  token : string;

  constructor(){
      this.username = null;
      this.email = null;
      this.user_id = null ;
      this.token = null;
      this.is_active = false;
      this.is_staff = false;
  }


}

export class UserLogin{
   username : string ;
   password : string ;

   constructor(){
       this.username = '';
       this.password = '' ;
   }
  

}