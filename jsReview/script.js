console.log( 'js is like, ready, and stuff');

// . dot
// () parenthesis
// [] brackets or square brackets/braces
// {} curly brackets/braces
// < less than
// > greater than
// / forward slash, slash, whack
// \ backslash, backwhack
// ! not, bang
// # hash, pound, number
// * star, splat
// || or, double pipes // | pipe
// && and, double ampersand
// $ bling, dollar sign
// NaN not a number, bread
// = equals, assign, assignment operator

// DATA TYPES

// 'anything in quotes' - string
let kiaOraWorld = 'Kia Ora Vega'
console.log( kiaOraWorld );
// 1234567890 - number
// true or false - boolean
// {} - object
// undefined - undefined
// null - ???
// [] - array

// camelCaseIsHowWeDeclare

// let firstName = 'Morgan';       //expression
// let numberOfPets = 1;          //expression
// x = x + 3                     //expression
// x += 3                       //expression (short for above)
// x++                         //expression (increments of 1)
// '10'+1          //101  mixing string and number is wacky
// 10+1           //11
// 'ten' * 3     //NaN

//TRUTHY AND FALSEY

// true
// // 1 (or any other number except 0)
// 'any populated string'
//
// false
// 0
// ''
// NaN                //not a legal number
// null              //empty (never JS created)
// undefined        //variable exists, but value not assigned
// // eg   let world;
// console.log( world );
// not defined     //variable does not exist (this is an error)
// console.log( vega );

//CONDITIONALS

// if (/*expression is truthy*/) {
//   //run this code
// } else {
//   //do something else
// }

// = assignment
// == equal to                // 1 == 1 true  '1' == 1 true
// === strictly equal to     // 1 === 1 true '1' === 1 false
// < >
// <=, >=
// != not equal value
// !== not equal value or type


//LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS

//keep code 'dry' ie, not writing same code repepitively

// while (/* condition is truthy*/) {
//   //do some logic
// }      //beware infinite LOOPS

for (let i = 0; i < 3; i++) {
  //let i =0    declaring i (iterator)
  //i<3         run when i is less than 3 (or whatever declared)
  //i++         add 1 to i
  console.log( 'in example loop', i );
}

let colas = [ 'coke', 'pepsi', 'rc', 'jolt' ]

for (var i = 0; i < colas.length; i++) {
  console.log( colas[i] );
}

// variables defined within a loop/function are ONLY defined within that loop/function
// eg console.log( i );      not defined

for (let name of colas) {
console.log( 'in for in loop', name );
}

//FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS

//Keep functions PURE

function sayHello () {
  return 'Kia Ora!';
}// SUPER BASIC FUNCTION

console.log( sayHello() ); //will return undefined though

function sayHello (name) {
  return 'Kia Ora!' + name;
}// SLIGHTLY LESS BASIC FUNCTION

console.log( sayHello( 'Chad') );
console.log( sayHello( 'Ashley') );

//  //  //  //  //native JS functions
// console.log();
// array.push etc      //array.push adds to end of array
                       //array.pop removes from end of array
                       //array.unshift removes from beginning of array
                       //array.shift removes from beginning of array
// string.charAt()     //string.charAt() gives you the character at location within string
                       //string.charAt() gives you the character at location within string
                       //string.charAt() gives you the character at location within string
//parseInt()           //turns string into integer (whole number)
//                       eg parseInt('45') returns 45
//parseFloat           //similar, but decimal compatible
//                       eg parseInt('45.321') returns 45.321
//Number()
//String()

// // // // // // properties
//Array.length         //numbers of items in array
//string.length        //number of characters in string
