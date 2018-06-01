import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string;
  serverCreated: boolean = false;

  constructor {

  }

  ngOnInit() {

  }

  onCreateSever() {
    this.serverCreated = true;
    this.servcerCreationStatus = 'New Server was created!' + this.serverName;
  }

  onUpdateServerName(event: Name) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}



