function maxDifference(numArray){
    let small, large;

    numArray.sort();
    
    small = numArray[0];
    large = numArray[numArray.length-1];

    return large - small;
}

let A = [40, 10, 20, 30];
console.log(maxDifference(A));