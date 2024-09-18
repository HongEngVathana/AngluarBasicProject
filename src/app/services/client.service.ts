import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'GetAllDesignation'
    );
  }
  addUpadte(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + 'GetAllDesignation',
      obj
    );
  }
  deletClientById(id: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'DeleteEmployeeByEmpId?empId=1'
    );
  }
}
