// Question 1: use for loop to manipulate a tree like below:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//      *
let star = '*'
let height = 7
for (let i = 0; i < height; i++) {
  let layer = star
  for (let j = i; j < height - 1; j++) {
    layer = ' ' + layer
  }

  if (i !== height - 1) {
    for (let j = 0; j < i; j++) {
      layer = layer + star + star
    }
  }else{
    for (let j = 0; j < height - 1; j++) {
      layer = ' ' + layer
    }
  }

  console.log(layer)
}


// Question 2: given a string str1 = ` how do  you turn this    on`
// format it to `How do you turn this on` and assgn the result the variable `answer2`
let str1 = ' how do  you turn this    on '

let a = str1.split(' ')
console.log(a)

// let answer2 = ''
let strs = []
for (let i = 0, max = a.length; i < max; i++) {
  let word = a[i]
  if (word !== '') {
    if (strs.length === 0) {
      let wordLength = word.length
      let newWord = word.toUpperCase()[0] + word.slice(1, wordLength)
      strs.push(newWord)
    } else {
      strs.push(word)
    }
  }
}

console.log(strs.join(' ') === 'How do you turn this on')
