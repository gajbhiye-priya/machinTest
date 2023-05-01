import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  addProfile(payload: any) {

    return this.http.post('http://localhost:3000/registration', payload)

  }

  getProfileById(id: number) {
    console.log("serviceId", id)
    return this.http.get(`http://localhost:3000/registration/${id}`)
  }

  userDataupdate(datas: any, id: number) {
    return this.http.put(`http://localhost:3000/registration/${id}`, datas)
  }



}
