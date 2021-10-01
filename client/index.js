document.getElementById("userBtn").addEventListener("click", userName);

// document.getElementById('vowelBuyBtn').addEventListener('click', bankAccount)
document.getElementById("startBtn").addEventListener("click", startGame);
const board = document.getElementById("gameBoard");

//var for word user is guessing
let gameWord = document.getElementById("wordPhrase");
let wordType = document.getElementById("wordType");

const baseUrl = "https://wheel-0f-fortune.herokuapp.com"; //for heroku link
// const baseUrl = 'http://localhost:4000'

function startGame(e) {
  e.target.parentNode.remove();
  let idNum = 0;
  //Need to get word from api
  axios.get(baseUrl + "/words").then((res) => {
    let { gamePhrase, type } = res.data;
    wordType.textContent = type;
    gamePhrase = gamePhrase.split("");
    for (let i = 0; i < gamePhrase.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.textContent = gamePhrase[i];
      newDiv.classList.add("hidden", "gameCard");
      newDiv.setAttribute(`id`, `grid_${idNum}`); //adds a id to each div with a different number
      gameWord.appendChild(newDiv); //links the newDiv to
      idNum++; //number increases by 1
    }
  });
}

function userName(e) {
  e.preventDefault();
  document.getElementById("nameFeild").textContent =
    document.getElementById("name").value;
  let input = document.getElementById("name");
  let button = document.getElementById("userBtn");
  input.remove();
  button.remove();
}

let alphaBtn = document.getElementsByClassName("alphabet");
let playerGuess;

//block gets button value
for (let i in Object.values(alphaBtn)) {
  alphaBtn[i].onclick = function () {
    playerGuess = this.value;
    checkGuesstoPhrase();
  };
}

let bankAccount = document.getElementById("bankAccount").textContent;

function checkGuesstoPhrase() {
  if (playerGuess.match(/[AEIOU]/g)) {
    if (bankAccount >= 250) {
      alert("You Bought a Vowel");
      bankMinus();
    } else {
      alert("Not enough bankroll");
    }
  }
}

function bankMinus() {
  document.getElementById("bankAccount").textContent = bankAccount -= 250;
  return bankAccount;
}

function bankAdd() {}
