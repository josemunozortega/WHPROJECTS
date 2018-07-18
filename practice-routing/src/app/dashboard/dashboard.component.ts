import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
