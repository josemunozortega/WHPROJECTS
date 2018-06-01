import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean; serverCreationStatus: string = 'No Server was created';
  serverName: string;

  constructor {

  }

  ngOnInit() {

  }

  onCreateSever() {
    this.servcerCreationStatus = 'New Server was created!';
  }

  onUpdateServerName(event: Name) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}



