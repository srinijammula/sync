import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inject http client object
  constructor(private hc:HttpClient) { }

  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }

  loginUser(credentials):Observable<any>{
    return  this.hc.post("/user/login",credentials)
  }




  getUser(username):Observable<any>{
      return this.hc.get(`/user/getuser/${username}`)
  }

  deleteUser(){

  }

  updateUser(){

  }
}
