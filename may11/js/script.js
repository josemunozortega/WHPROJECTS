// function addTwo(num){
//     return num + 2;
// }

// console.log( addTwo(2) );

// // let addFour = function(num){
//     // return num + 4;
// // }

// let addFour = num => num + 4; //for multiple parameters add paranthesis around first num in line

// console.log( addFour(2) );

// function Counter(num){
//     this.num = num;
//     // let that = this;
//     this.timer = setInterval( () => {
//         // console.log(that);
//         this.num++;
//         // this.num++;
//         // console.log(this.num);
//     }, 1000);
// }

// // let num1 = new Counter(0);

// // console.log(num1);

// let num1 = new Counter(0);
// let num2 = new Counter(100);

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let numbersPlusTwo = [];

// for(let n = 0; n > numbers.length; n++){
//     numbersPlusTwo.push(numbers[n] + 2);
// }

// numbers.forEach(x/* ,y,z */ => x + 2);

// // console.log(numbersPlusTwo);

// let numbersPlusTwo = numbers.map(x => x + 2);

// console.log(numbers, numbersPlusTwo);



// numbersEvens = numbers[Symbol.iterator]();
// numbers.forEach ( () => {
//     if(numbersEvens.next().value % 2 == 0){
//     console.log(numbersEvens.next());
//     }
// });


// let numbersEven = [];
let numbersEven = numbers.filter( x => x % 2 == 0);

console.log(numbersEven);