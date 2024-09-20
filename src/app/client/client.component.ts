import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../model/class/Client';
import { FormsModule } from '@angular/forms';

import { ClientService } from '../services/client.service';
import { APIResponseModel } from '../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../resusableComponent/alert/alert.component';
import { MyButtonComponent } from '../resusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    AlertComponent,
    MyButtonComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  currenDate: Date = new Date();
  clientObj: Client = new Client();
  celientList: Client[] = [];

  clientService = inject(ClientService);

  userList$: Observable<any> = new Observable<any>();
  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.celientList = res.data;
    });
  }
  onSeveClient(data: string) {
    debugger;
    this.clientService
      .addUpadte(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Clieint Created Sucess');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.massage);
        }
      });
  }
  onEdit(data: Client) {
    this.clientObj = data;
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.clientService
        .deletClientById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Client Delete Success');
            this.loadClient();
          } else {
            alert(res.massage);
          }
        });
    }
  }
}
