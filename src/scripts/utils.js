export function getScrollTop () {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

// Get a unique random number between min/max
export function getRandoms (numPicks, min, max) {
	var len = max - min + 1
	var nums = new Array(len)
	var selections = []
	var i = 0
	var j = 0

	if (min === 0) {
		if (numPicks > max + 1) return
	} else {
		if (numPicks > max - min + 1) return
	}

	// Initialize the array
	for (i = 0; i < len; i++) {
		nums[i] = i + min
	}

	// Randomly pick one from the array
	for (j = 0; j < numPicks; j++) {
		var index = Math.floor(Math.random() * nums.length)
		selections.push(nums[index])
		nums.splice(index, 1)
	}

	return selections
}
