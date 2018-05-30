let person1 = {
    firstName: 'John',
    lastName: 'Wick',
    age: 41,
    eyeColor: 'brown'
};

let person3 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 38,
    eyeColor: 'green'
};

let People = function(fn, ln, a, ec){
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyeColor = ec;
    this.greeting = function(ufn){
        `It's nice to meet you ${ufn}! My name is$
        {this.firstName}`;
    }
};

let joey = new People("Joey", "Ortega", 24, "blue");
let bob = new People("Professor", "Charles", 109, "green")

console.log(joey, bob);
console.log(joey.greeting('storm'));
console.log(bob.greeting('nightcrawler'));
