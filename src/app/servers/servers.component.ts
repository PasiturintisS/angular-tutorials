import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName ='';
  serverCreated = false;

  onCreateServer(){
    this.serverCreated = true;
  }

  onUpdateServerStatus(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}