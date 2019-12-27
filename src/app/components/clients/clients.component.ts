import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {

  private clients: any;
  private urlImage: string;
  private loading = false;

  constructor(
    private clientService: ClientService
  ) {
    this.urlImage = 'https://www.grupoermofe.com/api/img';
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
