const list = document.querySelector("ul");
const queue_arr = [];  // tom array til min kø
const amount = () => Math.floor(Math.random() * 101);// random nummer generator 



// kører hvert sekund, skal ikke calles, laver constanten v til et tilfældigt tal, pusher v til slutningen af array, consol logger v, 
// hvis array er lngere end 20, fjerner første element i array, caller addBar funktionen

setInterval(() => {
  const v = amount();
  queue_arr.push(v);
  console.log(v);
  if (queue_arr.length > 20) queue_arr.shift();

  addBar(v); 
}, 1000);

// tager value som parameter, laver et li element, giver css properties --height baseret på value (?), tilføjer li til ul (list), hvis list er længere end 20, fjern først li element
// basically hvad vi gør i setInterval functionen, men i DOM'en

function addBar(value) {
  const li = document.createElement("li");     
  li.style.setProperty("--height", value);
  list.appendChild(li);
  if (list.children.length > 20) list.firstElementChild.remove();
}


