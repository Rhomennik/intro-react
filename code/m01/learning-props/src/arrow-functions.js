'use strict'

console.log('Arrow functions')
 // forma normal
// var sum = function (x, y) {
// return x + y
// }

// Arrow-functions
 var sum = (x, y) => x + y

 var add1 = x => sum(x, 1)



console.log(add1(1))