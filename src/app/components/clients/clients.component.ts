import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { api } from "src/app/global/variable.global";
import { ClientEntry } from "../../../interfaces/client";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
  providers: [ClientService],
})
export class ClientsComponent implements OnInit {
  public clients: ClientEntry[];
  public url = api.cockpit;
  public loading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      (result) => {
        this.loading = true;
        this.clients = result.entries;
      },
      (error) => {
        this.clients = [];
        console.log(error);
      }
    );
  }
}
