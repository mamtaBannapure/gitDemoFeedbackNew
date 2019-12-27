import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDetails } from '../model/admin.model';
import { Login } from '../model/Login.model';
import { AddressDetails } from '../model/AddressDetails.model';
import { EmployeeDetails } from 'app/model/EmployeeDetails.model';
import { Observable } from 'rxjs';
import { Address } from 'cluster';
//import { feedBackDetails } from 'app/model/admin.model copy';
import { FeedbackDetails } from 'app/model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsahredservicesService {
  admin: AdminDetails[];
  log: Login = {
    loginId: null,
    loginUserName: '',
    loginPassword: '',
    status: '',
    role: null
  }
  addr: AddressDetails = {
    addressId: null,
    addressVillage: '',
    addressTalName: '',
    addressDistName: '',
    addressStateName: '',
    addressCountryName: '',
    addressZiPcode: null

  }
  f: FeedbackDetails = {
    feedbackId: null,
    feedbackMessage: '',
    feedbackdate:''
  }

  constructor(private http: HttpClient) { }

  url = "http://localhost:8082/admin/add";
  url5 = "http://localhost:8082/admin/getAll";
  urll = "http://localhost:8082/login/log";
  url2 = "http://localhost:8082/admin";
  url6 = "http://localhost:8082/admin";
  updateadminurl = "http://localhost:8082/admin/update";
  url7 = "http://localhost:8082/admin";
  url1 = "http://localhost:8082/admin";
  urlf = "http://localhost:8082/feedback";

  getAdminData() {
    return this.http.get<AdminDetails[]>(this.url2 + '/getAllAdmin');
  }

  editAdmin(adminId) {
    return this.http.get<AdminDetails[]>(this.url2 + '/edit' + adminId);
  }

  updateAdmin(admin2) {
    //console.log(admin2);
    return this.http.put<AdminDetails[]>(this.updateadminurl + '/', admin2);
    // return this._http.put<Student[]>(this.url+'/',st);
  }

  /* updateAdminData(id:number, value:any):Observable<Object>
   {
           return this.http.post(this.updateadminurl+"/update",value);
   //  return this.http.post(this.updateadminurl+"/edit/{adminId}"+adm.adminId,adm);
   }*/

  addAdmin(adm) {

    console.log(adm);

    return this.http.post<number>(this.url + '/', adm);

  }

  addAddrs(addrs) {
    return this.http.post<number>(this.url + '/', addrs);
  }

  addLogin(log1) {
    console.log(log1);
    try {
      return this.http.post<Login>(this.urll + '/', log1);
    }
    finally { console.log(Login); }


  }

  getEmpData() {
    return this.http.get<EmployeeDetails[]>(this.url1 + '/getEmp');
  }
  addFeedback(fb: FeedbackDetails) {

    console.log(fb);
    return this.http.post<FeedbackDetails>(this.urlf + '/add/', fb);

  }
  getFeedback() {
    return this.http.get<FeedbackDetails[]>(this.urlf + '/getAllFeedback');
  }
  deletFeedBack(fid) {
     return this.http.delete<FeedbackDetails>(this.urlf + '/delete'+ fid);
  }



  /*
  admData:AdminDetails={
      adminId:null,
      adminFirstName:'',
      adminLastName:'',
      adminEmailId:'',
      adminContact:'',
      adminAadharNo:null,
      adminPanNo:'',
      adminDob:'',
      login:{
        loginId:null,
        loginUserName:'',
        loginPassword:'',
        status:'',
        role:null,
      },
      address:{
        addressVillage:'',
        addressTalName:'',
        addressDistName:'',
        addressStateName:'',
        addressCountryName:'',
        addressZiPcode:null
      }
    }*/


}
