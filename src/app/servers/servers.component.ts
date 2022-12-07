import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreationStatus = 'no server is created!';
  serverName ='';

  onCreateServer(){
    this.serverCreationStatus = 'server was created.';
  }

  onUpdateServerStatus(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}