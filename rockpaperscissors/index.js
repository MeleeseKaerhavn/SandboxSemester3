"use strict";

let userChoice;
let computerChoice;
let userPoints = 0;
let computerPoints = 0;
const rockBtn = document.querySelector(".rock")
const scissorsBtn = document.querySelector(".scissors")
const paperBtn = document.querySelector(".paper")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")


function addEventlistenerToButtons() {
    rockBtn.addEventListener("click", rockKlik);
    paperBtn.addEventListener("click", paperKlik);
    scissorsBtn.addEventListener("click", scissorsKlik);

};

function rockKlik(){
    userChoice = "rock";
    computerGuess();
};
function scissorsKlik(){
    userChoice = "scissors";
    computerGuess();
};
function paperKlik(){
    userChoice = "paper";
    computerGuess();
};

addEventlistenerToButtons();


function computerGuess(){

    const choice_array = ["rock","paper","scissors"]
    const randomNum = Math.floor(Math.random()*3);
    computerChoice = choice_array[randomNum];
    console.log("Computerens valg: " + computerChoice);
    console.log("Dit valg: " + userChoice);
    animationStarter();
};

function animationStarter(){
    player1.classList.add("shake");
    player2.classList.add("shake");

    player1.addEventListener("animationend", animationEnd);
};

function animationEnd(){
    player1.classList.remove("shake");
    player2.classList.remove("shake");
    showResultScreen();
};

function showResultScreen(){
    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");

    player1.classList.add(userChoice);
    player2.classList.add(computerChoice);

    const result = checkWinner();
    console.log("Resultat:", result);
    console.log("Dine Point: " + userPoints + " Computerens point: " + computerPoints)
     
    if (userPoints >= 3 || computerPoints >= 3) {
      endGame();}

};

function checkWinner() {
  if (userChoice === computerChoice) {
    return "Uafgjort";
  } 
  if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) 
    {
    userPoints++;
    return "Du vandt denne runde";
  }
  else {
    computerPoints++;
  return "Computeren vandt denne runde";
  };


};

function endGame(){
    console.log("Spillet er slut!")
    if (userPoints === 3) {
    console.log("Du vandt spillet!");
  } else {
    console.log("Computeren vandt spillet!");
  };
};











// Første forsøg på en if sætning, som blev overflødig

//     if (userChoice === "scissors" && computerChoice === "scissors"){
//         player1.classList.add("scissors");
//         player2.classList.add("scissors");
//     }
// else if (userChoice === "scissors" && computerChoice === "rock"){
//         player1.classList.add("scissors");
//         player2.classList.add("rock");
//     }
//     else if (userChoice === "scissors" && computerChoice === "paper"){
//         player1.classList.add("scissors");
//         player2.classList.add("paper");
//     }
//     else if (userChoice === "paper" && computerChoice === "paper"){
//         player1.classList.add("paper");
//         player2.classList.add("paper");
//     }
//     else if (userChoice === "paper" && computerChoice === "rock"){
//         player1.classList.add("paper");
//         player2.classList.add("rock");
//     }
//     else if (userChoice === "paper" && computerChoice === "scissors"){
//         player1.classList.add("paper");
//         player2.classList.add("scissors");
//     }
//     else if (userChoice === "rock" && computerChoice === "rock"){
//         player1.classList.add("rock");
//         player2.classList.add("rock");
//     }
//     else if (userChoice === "rock" && computerChoice === "scissors"){
//         player1.classList.add("rock");
//         player2.classList.add("scissors");
//     }
//     else if (userChoice === "rock" && computerChoice === "paper"){
//         player1.classList.add("rock");
//         player2.classList.add("paper");
//     };





