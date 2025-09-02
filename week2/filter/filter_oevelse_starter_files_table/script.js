const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function dash(v) {
  if (v === undefined || v === null || v === "") {
    return "—";
  } else {
    return v;
  }
}

function yesNo(v) {
  if (v === true) {
    return "✅";
  } else {
    return "";
  }
}


showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${dash(each.fuel)}</td>
  <td>${each.passengers}</td> 
  <td>${dash(each.stops)}</td>
  <td>${each.ownedBy}</td>
  <td>${yesNo(each.isElectric)}</td>
  <td>${yesNo(each.isTandem)}</td>
</tr>`;
  });
}





document.getElementById("all").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

// electric
document.getElementById("electric").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isEl));
});

// > 2 seats
document.getElementById("png2").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(moreThatTwo));
});

// Jonas + electric
document.getElementById("jonasEl").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isJonasEl));
});

// Rugbrød + passengers > 1
document.getElementById("ryePlus").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isRyeAndOnePlus));
});







function isEl(vehicle){
  return vehicle.isElectric === true;
}

// const onlyElectric = vehicles.filter(isEl);
// showTheseVehicles(onlyElectric);


function moreThatTwo(vehicle){
  return vehicle.passengers > 2;
}

// const moreThatTwoPassengers = vehicles.filter(moreThatTwo);
// showTheseVehicles(moreThatTwoPassengers);


function isJonasEl(vehicle) {
  return vehicle.isElectric === true && vehicle.ownedBy === "Jonas";
}

// const onlyJonasElectric = vehicles.filter(isJonasEl);
// showTheseVehicles(onlyJonasElectric);


function isRyeAndOnePlus(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
}

// const isRyeAndOnePlusConst = vehicles.filter(isRyeAndOnePlus);
// showTheseVehicles(isRyeAndOnePlusConst);



// console.log("Electric vehicles: " + onlyElectric);
// console.log("More than two passengers: " + moreThatTwoPassengers);


// function beautifyTable(){

// }



