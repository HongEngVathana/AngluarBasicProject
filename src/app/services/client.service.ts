import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT
    );
  }

  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT
    );
  }
  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_EMP
    );
  }
  getAllUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUpadte(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + 'AddUpdateClient',
      obj
    );
  }
  deletClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + id
    );
  }
  addClentProjjectUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + 'AddUpdateClientProject',
      obj
    );
  }
}
