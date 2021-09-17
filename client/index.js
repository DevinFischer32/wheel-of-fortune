document.getElementById('userBtn').addEventListener('click', userName) 
document.getElementById('guessBtn').addEventListener('click', playerGuess)
// document.getElementById('vowelBuyBtn').addEventListener('click', bankAccount)
document.getElementById('startBtn').addEventListener('click', startGame)
const board = document.getElementById('gameBoard')

function startGame(){
    document.getElementsByClassName('startScreen')
}





function userName(e){
    e.preventDefault()     
    document.getElementById('nameFeild').textContent = document.getElementById('name').value 
    removeUserNameInput()
}

function removeUserNameInput (){
    let input = document.getElementById('name') 
    let button = document.getElementById('userBtn')
    input.remove()
    button.remove()
}

function playerGuess(e){
    e.preventDefault()
    const allGuess = document.getElementById('allGuess')
    let playerInput = document.getElementById('playerGuess').value.toLowerCase()
    let bankAccount = document.getElementById('bank')
    
    //matching variables 
    let consonants = playerInput.match(/[bcdfghjklmnpqrstvwxyz]/g)
    let vowels = playerInput.match(/[aeiou]/g)
    
    //matching for gamePhrase
    let gamePhrase = document.getElementById('gamePhase')
    console.log(gamePhrase)
    let bank = Number(bankAccount) //Need to set up buying vowels and adding money when right
    console.log(typeof bank,bank)
    bank = 0
    console.log(typeof bank,bank)
    let allow = false //allowing to use a vowel

    if(consonants){
        for(let i = 0;i<playerInput.length;i++){
           if(playerInput.length * bank > bank){
               bank += 5
           }else{
               return
           }
        }
        allGuess.textContent += playerInput + " "

    }else if(vowels){
        if(allow != false && bank >= 250*vowels.length){
            function buyingVowel(){
                
                allGuess.textContent += playerInput + " "
            }
        }else{
            alert('You need to purchase a vowel')
        }
    }else{
        alert('Please Enter A Letter')
    }
        //need to retrict vowels
        //need a if no match to gamePhrase then allGuess.textContent += playerInput + " "
    
    document.getElementById('playerGuess').value = ''
}
// function bankAccount(){
    
// }


