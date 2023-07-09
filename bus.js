let busFear = number =>{
    let busPassenger = number % 50;
    let microbus = busPassenger % 11;
    let leftPassenger = microbus *250
    return leftPassenger ;
}

let total = busFear(63);
console.log(total);