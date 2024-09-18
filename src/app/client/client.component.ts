import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../model/class/Client';
import { FormsModule } from '@angular/forms';

import { ClientService } from '../services/client.service';
import { APIResponseModel } from '../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  celientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.celientList = res.data;
    });
  }
  onSeveClient() {
    debugger;
    this.clientService
      .addUpadte(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Clieint Created Sucess');
          this.loadClient();
        } else {
          alert(res.massage);
        }
      });
  }
}
