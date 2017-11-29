// Question: write a function `randomGroup` which have two arguments `members` and `groupNumber`
// returns a nested array of members assign in different group randomly, the number of members
// in each group should evenly distributed as possible.

// For example
// let members = ['Andy', 'Ben', 'Carol', 'Denny', 'Eric']
// radnomGroup(members, 2) //return [['Andy', 'Ben', 'Denny'], ['Carol', 'Eric']]

function randomGroup(members, groupNumber){
	let membersCopy = members.slice()
	let groups = []
	let grpMemberCount = Math.floor(membersCopy.length / groupNumber) //2
	let bigGrpCount = membersCopy.length % groupNumber //2

	for (let i = 0; i < groupNumber; i++) {
		let currentGroup = []

		if (i < bigGrpCount) {
			for (let i = 0; i < grpMemberCount + 1; i++) {
				let ranNum = Math.floor(Math.random() * (membersCopy.length))
				currentGroup.push(membersCopy[ranNum])
				membersCopy.splice(ranNum, 1)
			}
		}

		else {
			for (let i = 0; i < grpMemberCount; i++) {
				let ranNum = Math.floor(Math.random() * (membersCopy.length))
				currentGroup.push(membersCopy[ranNum])
				membersCopy.splice(ranNum, 1)
			}
		}

		groups.push(currentGroup)
	}

	return groups
}

let members = ['Andy', 'Ben', 'Carol', 'Denny', 'Eric']
console.log(randomGroup(members, 2))