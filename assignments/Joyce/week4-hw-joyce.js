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
	let ary_shuffle = []
	let ary_length = ary.length
	for (let i = 0; i < ary_length; i++) {
		let ran_num = Math.floor(Math.random() * (ary.length))
		ary_shuffle.push(ary[ran_num])
		ary.splice(ran_num, 1)
	}
	return ary_shuffle
}

result = shuffle([1, 9, 3, 5, 2])
console.log(result)

// ---
// Question 4: write a function `max` which have one argument `ary` and
// returns the maximum value in `ary`
// For example `max([1, 9, 3, 5, 2])`` should return 9

function max(ary) {
	let ary_max = 0
	for (let i = 0; i < ary.length; i++){
		if (ary[i] > ary_max) {
			ary_max = ary[i]
		}
	}
	return ary_max

}

// console.log(max([1, 9, 3, 5, 2]))

// ---
// Question 5: write a function `union` which have two arguments `ary1` and `ary2`
// returns the union of `ary1` and `ary2`
// For example `union([1, 5, 2], [2, 3, 6])`` should return [1, 5, 2, 3, 6]

function union(ary1, ary2) {
	let ary_union = ary1
	for (let i = 0; i < ary2.length; i++) {
		let dup = false
		for (let j = 0; j < ary1.length; j++) {
			if (ary2[i] === ary1[j]) {
				dup = true
			}
		}
		if (dup === false) {
			ary_union.push(ary2[i])
		}
	}
	return ary_union
}

// console.log(union([1, 5, 2], [2, 3, 6]))