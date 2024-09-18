import { Component, OnInit, inject } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel, IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [MasterComponent, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  // constructor(private http: HttpClient){

  // }
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    this.http
      .get<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )

      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }
}
