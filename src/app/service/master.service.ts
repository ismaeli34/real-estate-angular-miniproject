import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string = "https://projectapi.gerasim.in/api/RealEstate/";

  onLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  addAgent(obj:any){
   return this.http.post(`${this.apiUrl}AddNewAgent`,obj)
  }

  addCustomer(obj:any){
    return this.http.post(`${this.apiUrl}AddNewCustomer`,obj)
  }

  login(obj:any){
    return this.http.post(`${this.apiUrl}login`,obj)
  }

  addProperty(obj:any){
    return this.http.post(`${this.apiUrl}AddNewProperty`,obj)
  }
  updateProperty(obj:any){
    return this.http.post(`${this.apiUrl}UpdateProperty`,obj)
  }
  getAllProperty(){
    return this.http.get(`${this.apiUrl}GetAllProperty`)
  }

  deleteProperty(id:number){
    return this.http.delete(`${this.apiUrl}DeletePropertyId?propertyId=${id}`)
  }

  makeEnquiry(obj:any){
    return this.http.post(`${this.apiUrl}AddNewEnquiry`,obj)
  }



}
