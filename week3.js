// common string manipulate
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// concat two string
let str1 = 'foo' + 'bar'
console.log(str1)

// replace part of string
// only replace first occurence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
let str2 = 'Ruby on Ruby Rails'.replace('Ruby', 'React')
console.log(str2)

// replace part of string using regular expression!
let str3 = 'Ruby on Rails'.replace(/R/g, 'L') //g = global (forces it to replce all)
console.log(str3)

// compare two string
let result1 = 'foo' === 'bar'
console.log(result1) //false

// get string length
console.log('Ruby'.length) //4

// extract part of string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
let str4 = 'Ruby on Rails'.slice(0, 4) //(start, up to), empty space counts as a character/char
console.log(str4)

// split a string into an array of strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

let str5 = 'Ruby on Rails'.split(' ') // put into array
let str5 = 'Ruby on Rails'.split(' ')[1] // saves as a string 'on'
let str5 = 'Ruby on Rails'.split('R') // [ '', 'uby on ', 'ails' ]
console.log(str5)

// join all elements of an array into a string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// common Math methods
let str6 = ['Machine', 'Learning'].join(' ')
console.log(str6) //'Machine learning'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// sqrt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
let num1 = Math.sqrt(4)
console.log(num1)

// abs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
let num2 = Math.abs(-4)
console.log(num2)

// random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let num3 = Math.random()
console.log(num3)

// round
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
let num4 = Math.round(3.6)
console.log(num4)

// log
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
let num5 = Math.log(2)
console.log(num5)
