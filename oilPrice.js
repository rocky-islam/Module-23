let oilPrice = (diesel, petrol, octane)=>{
    let perLitterDieselPrice = 114;
    let perLitterPetrolPrice = 130;
    let perLitterOctanePrice = 135;

    let dieselPrice = perLitterDieselPrice * diesel;
    let petrolPrice = perLitterPetrolPrice * petrol;
    let octanePrice = perLitterOctanePrice * octane;

    let totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
}

let result = oilPrice(12,18,19);
console.log('total price is: ', result);