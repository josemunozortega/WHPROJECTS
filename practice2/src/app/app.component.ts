import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;


  sayHi(): string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const customer: Person = {
      firstName: 'joey',
      lastName: 'ortega',
      sayHi: () => {
        return 'Hi';
      }
    };
    console.log(customer.sayHi());

    const employee: Person = {
      firstName: 'test',
      lastName: 'employee',
      sayHi: () => {
        return 'Hello!';
      }
    };
    console.log(employee.sayHi());
  }
}

// alert("Warning");
// SuccessMessage();
// WarningMessage();
// DangerMessage();
