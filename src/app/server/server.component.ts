import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  // random skaiciai generuojami tiesiog kad nebutu visad statinis ID ir statusas servo zodziu kad butu idomiau
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.floor(Math.random() * 100);
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getServerId(): number {
    return this.serverId;
  }

  // nurodom kokia spalva bus
  getColor(): string {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}