// object
let obj = { foo: 'bar', age: 27 }

// update value
obj.foo = 'baz'
console.log(obj.foo)

// add new key and value
obj.weather = 'rainy day'
console.log(obj.foo)

// add new key and value with dynamic key
let key = 'name'
obj[key] = 'ben'

console.log(obj[key])

// try to read unknown key
console.log(obj.unknownKey)

// nested object
obj.company = { name: 'codementor' }


// primitive value and object
let b = 2
let c = b
c = 3
console.log(`b = ${b}`)
console.log(`c = ${c}`)

let person = { name: 'Ben', age: 27}
let person2 = person
person.name = 'Tom'
console.log(`person.name = ${person.name}`)
console.log(`person2.name = ${person2.name}`)

// Correct way to cope with clone object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var copy = Object.assign({}, person)
copy.name = 'Leo'
console.log(`person.name = ${person.name}`)
console.log(`copy.name = ${copy.name}`)

// Array is object too!
let ary1 = [1,2,3]
let ary2 = ary1
ary2[1] = 7
console.log('ary1 = ', ary1)
console.log('ary2 = ', ary2)


// Correct way to cope with clone array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
let copyAry1 = ary1.slice()
copyAry1[1] = 9
console.log('ary1 = ', ary1)
console.log('copyAry1 = ', copyAry1)
