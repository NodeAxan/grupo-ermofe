import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { api } from 'src/app/global/variable.global';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {

  public clients: any;
  public urlImage: string;
  public loading = false;

  constructor(
    private clientService: ClientService
  ) {
    this.urlImage = `${api.url}/img`;
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      result => {
        this.loading = true;
        this.clients = result;
      },
      error => {
        this.clients = false;
        console.log(error);
      }
    );
  }

}
