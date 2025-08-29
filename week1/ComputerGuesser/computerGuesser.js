"use strict";

document.addEventListener("DOMContentLoaded", () => {
const højere  = document.getElementById("op");
const lavere  = document.getElementById("ned");
const korrekt = document.getElementById("korrekt");
const computerGæt = document.getElementById("computerGuess")
let answer = document.getElementById("mitTal");
const lock = document.getElementById("lock");

let mitTal = null;
let low, high, computerGuess;

lock.addEventListener("click", () => {
  const value = Number(answer.value.trim());
  if (Number.isNaN(value)) {
    alert("Skriv et gyldigt tal");
    return;}
 

mitTal = value;

console.log("Det rigtige svar: " + mitTal);
 });

document.querySelector("#start").addEventListener("click", startSpil);

function startSpil(){
    low = 1;
    high = 100;
    computerGuess = 50; 
    console.log("Computer gæt:", computerGuess);
    computerGæt.textContent = computerGuess;

    if (mitTal > computerGuess){
        console.log ("Computerens gæt er for lavt!");
    }
    else if (mitTal < computerGuess){
        console.log ("Computerens gæt er for højt!");
    }
    else{
        console.log ("Computeren gættede korrekt!");
    };
};


    højere.addEventListener("click", () =>{
        low = computerGuess + 1;
        newGuess();
    });


    lavere.addEventListener("click", () => {
        high = computerGuess - 1;
        newGuess();
    });


    korrekt.addEventListener("click", ()=>{
        document.querySelector(".hide").classList.remove("hide");

    });


function newGuess(){
  if (low > high) {
    console.log("Noget gik galt: interval er tomt!");
    return;
  }
  computerGuess = Math.floor((low + high) / 2);
  console.log("Computerens Nye Gæt:", computerGuess);
  computerGæt.textContent = computerGuess;
};

});

