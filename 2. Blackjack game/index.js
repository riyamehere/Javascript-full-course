let messageElement = document.getElementById("msg")
let sumElement =  document.querySelector("#sum-id")
let cardElement =  document.getElementById("card-id")
let isAlive = false
let hasBlackjack = false
let cards=[]
let sum = 0

let Player = {name:"Riya", points:50}; //created Player object
let playerElement = document.getElementById("user")
playerElement.textContent = Player.name + ":"+" $ "+Player.points

function startGame(){
    let firstCard = generateRandomNum()
    let secondCard = generateRandomNum()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive=true
    renderGame()
}
function generateRandomNum(){
    //if num=1 return 11
    //if num=11 12 or 13 return 10
    let randomNum = Math.floor(Math.random() * 13) + 1     //e.g floor(6.777)=6+1=7 floor(0.88)=0+1
    if(randomNum===1){
        return 11
    }
    else if(randomNum > 10 ){
        return 10
    }
    else{
        return randomNum
    }
}
function renderGame(){
    sumElement.innerText = "Sum :" + " "+sum
    cardElement.innerText = "Card : "
    for(let i=0;i<cards.length;i++){
    cardElement.textContent += cards[i]+" "
    }
    if(sum<=20){
        newcard=true
        message="Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        hasBlackjack=true
        message="Wohooo! You have got a Black Jack!!"
    }
    else{
        isAlive=false
        message="You are out of the game!"
    }
    messageElement.innerText=message
    //console.log("button clicked")
    
}
function newCard(){
    //is alive and does not have a blackjack
    if(isAlive === true && hasBlackjack === false){
    let card = generateRandomNum()
    cards.push(card)
    sum+=card
    renderGame()
    }
}