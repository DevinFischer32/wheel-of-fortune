document.getElementById('userBtn').addEventListener('click', userName) 
document.getElementById('guessBtn').addEventListener('click', playerGuess)
// document.getElementById('vowelBuyBtn').addEventListener('click', bankAccount)
document.getElementById('startBtn').addEventListener('click', startGame)
const board = document.getElementById('gameBoard')

//var for word user is guessing
let gameWord = document.getElementById('gamePhase')
let wordType = document.getElementById('wordType')


const baseUrl = 'https://wheel-0f-fortune.herokuapp.com' //for heroku link




function startGame (e){
  //removes start screen
    e.target.parentNode.remove()

    //Need to get word from api
    axios.get(baseUrl + "/words").then((res)=>{
        let {gamePhrase, type} = res.data
        console.log(gamePhrase, type)
        wordType.textContent = type
        gamePhrase = gamePhrase.split('')
        for(let i=0; i<gamePhrase.length;i++){
            console.log('for-loop',gamePhrase[i])
            wordDiv.textContent = gamePhrase[i]
            console.log(wordDiv)   
            
            board.appendChild(wordDiv)
        }
    })
        
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
    

    let bank = Number(bankAccount) //Need to set up buying vowels and adding money when right
    bank = 0

    let allow = false //allowing to use a vowel

    if(consonants){
        allGuess.textContent += playerInput + " "
        bank += 250
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


