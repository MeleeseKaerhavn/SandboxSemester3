const tilfældigeTal = Math.round(Math.random()*100);


console.log("Mit tilfældige tal: " + tilfældigeTal);

function readInput() {
    return Number(document.getElementById("userGuess").value);
}

document.querySelector("#knap").addEventListener("click", compare);

function compare(){
    let gæt = readInput();
    console.log("Gæt: " + gæt);
    if (gæt === tilfældigeTal){
        document.getElementById("hint").textContent= "korrekt!";
        document.querySelector(".hide").classList.remove("hide");
    }
    else if (gæt > tilfældigeTal){
        document.getElementById("hint").textContent= "for højt!";
    }
    else {
        document.getElementById("hint").textContent= "for lavt!";
    };
};

document.querySelector("#replay").addEventListener("click", replay);

function replay(){
    window.location.reload();
}

