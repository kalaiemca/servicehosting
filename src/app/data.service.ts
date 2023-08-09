import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident } from './components/Incident';
import { Register } from './authentication/Register';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string ="http://127.0.0.1:8000/incident/"
  private url_register: string ="http://127.0.0.1:8000/register/"
  constructor(private http: HttpClient) { }

  viewUser(){
    return this.http.get<Register>(this.url_register)
  }
  
  AddIncident(data:any){
    console.log(data)
    return this.http.post<Incident>(this.url,data)
  }

  viewIncident(){
    return this.http.get<Incident>(this.url)
  }


  RegisterUser(inputdata:any){
    return this.http.post<Register>(this.url_register,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.url_register+id);
  }
  Getall(){
    return this.http.get(this.url_register);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.url_register+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }

}
