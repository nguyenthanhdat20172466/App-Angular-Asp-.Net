import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5281/api";
  readonly PhotoUrl = "http://localhost:5281/Photos";
  constructor(private http: HttpClient) { }

  GetDSThucDon(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/ThucDon');
  }
  AddDSThucDon(val: any){
    return this.http.post<any>(this.APIUrl+ '/ThucDon', val);
  }

  EditDSThucDon(val: any){
    return this.http.put<any>(this.APIUrl+ '/ThucDon', val);
  }

  DeleteDSThucDon(val: any){
    return this.http.delete<any>(this.APIUrl+ '/ThucDon/'+val);
  }

  GetDSMonAn(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/MonAn');
  }
  AddDSMonAn(val: any){
    return this.http.post<any>(this.APIUrl+ '/MonAn', val);
  }

  EditDSMonAn(val: any){
    return this.http.put<any>(this.APIUrl+ '/MonAn', val);
  }

  DeleteDSMonAn(val: any){
    return this.http.delete<any>(this.APIUrl+ '/MonAn/'+val);
  }

  LoadPhoto(val: any) {
    return this.http.post<any>(this.APIUrl+'/MonAn/SaveFile', val);
  }

  GetDSTenThucDon(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/MonAn/GetAllTenThucDon');
  }
}
