const curseWords = [  
    {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },];

    const knap = document.querySelector("button");


    function hasBadWords(str){
        return curseWords.some(w => str.includes(w.bad));
    };


    function cleanText(str) {
    let result = str;


  
   for (const w of curseWords){
  result = result.replaceAll(w.bad, `<span class="mark">${w.good}</span>`);
}
    return result;
};

let alreadyFiltered = false;

knap.addEventListener("click", () => {
  

  const current = document.getElementById("text").innerHTML;
  const updated = cleanText(current);
  document.getElementById("text").innerHTML = updated;

  alreadyFiltered = true;
  isFiltered();
});

function isFiltered(){
    if (alreadyFiltered) {

    document.getElementById("info").classList.remove("hide");
    return;
  }
};
// Viser ikke dialogbox og jeg forstår ikke hvorfor :-))))