let passengerCount = document.getElementById('countpeople') //pass in arguments
console.log(passengerCount)
let count = 0

let savedEntries = document.getElementById("previousEntries")

function increment() {
  count = count + 1;
  passengerCount.innerText = count 
}
function save()
{
    let variable = count + "-"
    //render the vriable in savedEntries using inner text
    //savedEntries.innerText += variable //+= will concatenate with the previous entries
    savedEntries.textContent += variable //textContent will give us the space after dash
    countpeople.textContent = 0
    count=0 //so that the counter comes to 0 again
    console.log(savedEntries)
}

//PRACTICE PART//

// javascript
// let myAge = 21
// console.log(myAge)

// let myAge = 14
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// bonusPoints = bonusPoints +50
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)

// let username="riya"
// let message="hello"

// console.log(username + " " +message +"!")