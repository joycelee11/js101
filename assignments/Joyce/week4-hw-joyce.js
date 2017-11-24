// Question 1: write a function `circleArea` which have one argument `radius`
// and will return circlearea given `radius`

function circleArea(radius) {
   return Math.PI * radius * radius
}

// console.log(circleArea(5))

// ---
// Question 2: write a function `compact` which have one argument `ary` and
// returns a copy of `ary` with all null elements removed.
// For example `compact([1, null, false, 3, null, 2])`` should return [1, false, 3, 2]

function compact(ary) {
	let ary1 = []
	for (let i = 0; i < ary.length; i++){
		if (ary[i] != null){
			ary1.push(ary[i])
		}
	}
	return ary1
}

// console.log(compact([1, null, false, 3, null, 2]))

// ---
// Question 3: write a function `shuffle` which have one argument `ary` and
// returns a shuffled copy of `ary`
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(ary) {
	let aryShuffle = []
	let aryLength = ary.length
	for (let i = 0; i < aryLength; i++) {
		let ranNum = Math.floor(Math.random() * (ary.length))
		aryShuffle.push(ary[ranNum])
		ary.splice(ranNum, 1)
	}
	return aryShuffle
}

// result = shuffle([1, 9, 3, 5, 2])
// console.log(result)

// ---
// Question 4: write a function `max` which have one argument `ary` and
// returns the maximum value in `ary`
// For example `max([1, 9, 3, 5, 2])`` should return 9

function max(ary) {
	let aryMax = ary[0] //setting it as 0 is not good - what if the values are negative?
	for (let i = 0; i < ary.length; i++){
		if (ary[i] > aryMax) {
		aryMax = ary[i]
		}
	}
	return aryMax
}

// console.log(max([1, 9, 3, 5, 2]))

// ---
// Question 5: write a function `union` which have two arguments `ary1` and `ary2`
// returns the union of `ary1` and `ary2`
// For example `union([1, 5, 2], [2, 3, 6])`` should return [1, 5, 2, 3, 6]

function union(ary1, ary2) {
	// let aryUnion = ary1 //shouldn't do this, array is an object!, ary1 will have the same value as aryUnion
	let aryUnion = ary1.slice()
	for (let i = 0; i < ary2.length; i++) {
		let dup = false
		for (let j = 0; j < ary1.length; j++) {
			if (ary2[i] === ary1[j]) {
				dup = true
			}
		}
		if (dup === false) {
			aryUnion.push(ary2[i])
		}
	}
	return aryUnion
}

// console.log(union([1, 5, 2], [2, 3, 6]))