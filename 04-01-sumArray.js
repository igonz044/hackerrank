//Problem: add all numbers in an array

function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

let A = [1, 2, 3];
console.log("total: " + sumArray(A));