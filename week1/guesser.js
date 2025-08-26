const tilfældigeTal = Math.round(Math.random()*100);


console.log("Mit tilfældige tal: " + tilfældigeTal);

function readInput() {
    return Number(document.getElementById("userGuess").value);
}

document.querySelector("#knap").addEventListener("click", compare);

function compare(){
    let gæt = readInput();
    console.log("Gæt: " + gæt);
    // here you can also compare gæt with your random number
};




// document.querySelector("#knap").addEventListener("click", readInput);


// function readInput(){
    
//     let gæt = document.getElementById("userGuess").value;
//     console.log("Gæt: " + gæt);
//     return gæt;
// }

// console.log("Gæt: " + gæt);






// document.querySelector(#hint).add("for højt");