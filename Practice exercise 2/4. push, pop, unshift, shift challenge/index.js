let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
//The shift() function lets you remove an item from the start of an array. 
//The the unshift() function adds one or more items to the start of an array.
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries)
