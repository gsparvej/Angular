import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  baseUrl: string ="http://localhost:3000/management";

  constructor(private http: HttpClient) { }

  getAllManagement(): Observable<any>{

    return this.http.get(this.baseUrl);

  }
  deleteManagement(id: string): Observable<any> {

    return this.http.delete(this.baseUrl+'/'+id);
  }


}
