let radianToDegree = number =>{
    let degree = number * 180/Math.PI
    return degree;
}

const result = radianToDegree(5);
console.log(result);
