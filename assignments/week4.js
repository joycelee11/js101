// Question 1: write a function `circleArea` which have one argument `radius`
// and will return circlearea given `radius`
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2)
}

// Question 2: write a function `compact` which have one argument `ary` and
// returns a copy of `ary` with all null elements removed.
// For example `compact([1, null, false, 3, null, 2])`` should return [1, false, 3, 2]
function compact(ary) {
  let compactAry = []
  for (let i = 0, max = ary.length; i < max; i++) {
    if (ary[i] !== null) {
      compactAry.push(ary[i])
    }
  }
  return compactAry
}

// Question 3: write a function `shuffle` which have one argument `ary` and
// returns a shuffled copy of `ary`
function shuffle(ary){
  let shuffledAry = []
  for (let i = 0, max = ary.length; i < max; i++) {
    shuffledAry.push(ary[i])
  }

  for (let i = 0, max = shuffledAry.length; i < max; i++) {
    let randomIdx = Math.floor(Math.random() * max)
    let tmp = shuffledAry[i]
    shuffledAry[randomIdx] = shuffledAry[i]
    shuffledAry[i] = tmp
  }
}

// Question 4: write a function `max` which have one argument `ary` and
// returns the maximum value in `ary`
// For example `max([1, 9, 3, 5, 2])`` should return 9

function max(ary) {
  if(ary === undefined || ary.length === undefined || ary.length === 0){
    return undefined
  }
  let maxVal = ary[0]
  for (let i = 0, length = ary.length; i < length; i++) {
    if (maxVal) {
      if (maxVal < ary[i]) {
        maxVal = ary[i]
      }
    }
  }
  return maxVal
}


// Question 5: write a function `union` which have two arguments `ary1` and `ary2`
// returns the union of `ary1` and `ary2`
// For example `union([1, 5, 2], [2, 3, 6])`` should return [1, 5, 2, 3, 6]
function union(ary1, ary2) {
  let newAry = []
  for (let i = 0, max = ary1.length; i < max; i++) {
    newAry.push(ary1[i])
  }

  for (let i = 0, max = ary2.length; i < max; i++) {
    let elm = ary2[i]
    let hasExist = false
    for (let j = 0, length = newAry.length; j < length; j++) {
      if (elm === newAry[j]) {
        hasExist = true
      }
    }
    if (!hasExist) {
      newAry.push(elm)
    }
  }

  return newAry
}
// let a = [1, 5, 2]
// let b = [2, 3, 6]
// console.log(union(a, b))
