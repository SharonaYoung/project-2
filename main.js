// global variables 
let wins = 0;
let losses = 0;
let ties = 0;
const tie = document.getElementById("tie");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttons = document.querySelectorAll(".choice_btn");
const body = document.querySelector("body");



let userPlay;
let computerPlay
let statement = document.createElement("p");
// function to update ties 
const gameTied = () =>{
  ties++;
  tie.innerHTML = `Ties: ${ties}`;
  statement.textContent = `Game tied, computer played ${computerPlay}`;
  body.appendChild(statement);
}
// function to update wins
const gameWon = () => {
    wins++;
    win.innerHTML = `Wins: ${wins}`;
    statement.textContent = `You win! Computer played ${computerPlay}`;
    body.appendChild(statement);
}
// function to update losses
const gameLoss = () => {
  losses++;
  lose.innerHTML = `Losses: ${losses}`;
  statement.textContent = `You lost, computer played ${computerPlay}`;
  body.appendChild(statement);
}

// computer generated play
const computerChoice = function(){
  computerPlay = Math.floor(Math.random() * 3);
  if (computerPlay === 0){
    computerPlay = "rock";
  } else if ( computerPlay === 1){
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
  console.log("Computer played " + computerPlay);
}

// user plays:
rock.addEventListener('click', function(event){
  // console.log("I played Rock"); 
  console.log("User played rock");
  computerChoice();
  if(computerPlay === "rock"){
    console.log("*****TIE******");
    gameTied();
  }else if(computerPlay === "scissors"){
    console.log("***Win***");
    gameWon();
  }else{
    console.log("***Lose***");
    gameLoss();
  }
});

paper.addEventListener('click', function(){
  console.log("User played paper");
  computerChoice();
  // Determine Winner
  if(computerPlay === "paper"){
    console.log("*****TIE******");
    // update scores
    gameTied();
  }else if(computerPlay === "rock"){
    console.log("***Win***");
    // update scores
    gameWon();
  }else{
    console.log("***Lose***");
    // update scores
    gameLoss();
  }
});
scissors.addEventListener('click', function(){
  console.log("User played scissors");
  computerChoice();
  // Determine winner 
  if(computerPlay === "scissors"){
    console.log("*****TIE******");
    // update scores
    gameTied();
  }else if(computerPlay === "paper"){
    console.log("***Win***");
    // update scores
    gameWon();
  }else{
    console.log("***Lose***");
    // update scores
    gameLoss();
  }
});

