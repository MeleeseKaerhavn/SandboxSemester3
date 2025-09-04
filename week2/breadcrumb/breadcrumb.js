const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", generate);

function generate() {
    // lav stringen tom til en start.
  let str = "";

  console.log(str);

// const allButLast = bc.slice(0, -1);
// const last = bc.[bc.length -1];

// allButLast.forEach(objekt => {
//     str += `<li><a href="${objekt.link}">${objekt.name}</a></li>`;
//   });


//     str += `<li>${objekt.name}</a></li>`;


  
  bc.forEach((objekt, taeller, arr) => {
    console.log("objekt", objekt.name, taeller);
    str += `<li><a href="">${objekt.name}</a></li>`;

    if (taeller === arr.length - 1) {
      str += `<li>${objekt.name}</a></li>`;



      
    }
  });
  document.querySelector("ul").innerHTML = str;
}