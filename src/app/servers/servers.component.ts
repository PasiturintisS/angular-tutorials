import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName ='';
  serverCreated = false;
  // pasikuriam masyva kuris serverius laikys
  servers = [];
  messageIfServersListNotEmpty = '';

  onCreateServer(){
    this.serverCreated = true;
    //jei inputas ne tuscias stringas tada papildik lista 
    if(this.serverName != ''){
      this.servers.push(this.serverName);
    }
    // jei listas tuscias duoda pranesima
    if(this.servers.length <= 0) {
      this.messageIfServersListNotEmpty = 'Servers list is empty !';
    } else { // jei listas netuscias duoda pranesima
      this.messageIfServersListNotEmpty = 'Servers listed below :)';
    }
  }

  onUpdateServerStatus(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
