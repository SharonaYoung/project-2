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
let statement = document.createElement("p");

// computer generated play
let computerPlay
const computerChoice = function(){
  computerPlay = Math.floor(Math.random() * 3);
  console.log(computerPlay);
  if (computerPlay === 0){
    computerPlay = "rock";
  } else if ( computerPlay === 1){
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
}

// user plays:
rock.addEventListener('click', function(event){
  // console.log("I played Rock"); 
  computerChoice();
  if(computerPlay === "rock"){
    gameTied();
  }else if(computerPlay === "scissors"){
    gameWon();
  }else{
    gameLoss();
  }
});

paper.addEventListener('click', function(){
  computerChoice();
  // Determine Winner
  if(computerPlay === "paper"){
    // update scores
    gameTied();
  }else if(computerPlay === "rock"){
    // update scores
    gameWon();
  }else{
    // update scores
    gameLoss();
  }
});

scissors.addEventListener('click', function(){
  computerChoice();
  // Determine winner 
  if(computerPlay === "scissors"){
    // update scores
    gameTied();
  }else if(computerPlay === "paper"){
    // update scores
    gameWon();
  }else{
    // update scores
    gameLoss();
  }
});

// function to update ties 
const gameTied = () =>{
  ties++;
  tie.innerHTML = `Ties: ${ties}`;
  statement.textContent = `Game tied, computer also played ${computerPlay}`;
  rock.before(statement);
}
// function to update wins
const gameWon = () => {
    wins++;
    win.innerHTML = `Wins: ${wins}`;
    statement.textContent = `You win! Computer played ${computerPlay}`;
    rock.before(statement);
}
// function to update losses
const gameLoss = () => {
  losses++;
  lose.innerHTML = `Losses: ${losses}`;
  statement.textContent = `Aw darn! You lost, computer played ${computerPlay}`;
  rock.before(statement);
}