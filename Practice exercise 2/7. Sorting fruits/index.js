let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function fruitShelf(){
    for(let i=1 ; i<=fruit.length;i+=1){
        if(i%2==0){
            orangeShelf.textContent +=  "🍊"
        }
        else{
            appleShelf.textContent += "🍎"
        }
    }
}
fruitShelf()
