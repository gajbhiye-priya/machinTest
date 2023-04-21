import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  addProfile(payload:any){

    return this.http.post('http://localhost:3000/registration', payload)

  }

  

  // getProfileById(id:any){
  //   console.log("service is working fine", )
  //   return this.http.get(`http://localhost:3000/registration/${id}`)
  
  // }

  getProfileById(id:any){
     return this.http.get(`http://localhost:3000/registration/${id}`)
   
  }
  

}
