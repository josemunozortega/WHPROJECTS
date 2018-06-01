import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  styles: [`
    .online {
      color:white;
    }

    .standard {
      font-size: 32px;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string;
  serverCreated: boolean = false;
  servers = ['testservers', 'testserver2']

  constructor {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {

  }

  onCreateSever() {
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server was created!' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Name) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    return.this.serverStatus;
  }

  getBackgroundColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'yellow' : 'red';
  }
}

