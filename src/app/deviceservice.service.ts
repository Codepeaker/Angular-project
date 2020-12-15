import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  APIURL:string=  "https://webtest.onelap.in/api"

  constructor(private http:HttpClient) { }

  getDevices(){
    return this.http.get<any[]>(this.APIURL+"/devices");
  }
  updateDevices(formData){
    return this.http.put(this.APIURL+"/devices",formData);
  }

}