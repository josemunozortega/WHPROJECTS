import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  <h1>'Mr.' + {{ name }}</h1> //Does this go here? or in html?
  <p>{{ city }}</p>
})
export class AppComponent {
  title = 'app';

  // person: any {
  //   name: {
  //     firstName:'Dale',
  //     lastName:'Guy'
  //   },
  //   gender: male;
  // }
  // // name:;
  // // city:;

  // first: number;
  // second: number;

  class PersonDetails {
    person: any;'{
      name: string;
      gender: string;
    }'
    // {
    //   name: string;
    //   gender: string;
    // }

    constructor() {
      this.name = 'first';
      this.name = 'last';
    }
  };

};

//Practice 2 String Interpolation

class numberComponent {
  first: 5;
  second: 4;
}
console.log(numberComponent);

