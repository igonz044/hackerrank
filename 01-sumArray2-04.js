//Problem: add all numbers in an array

function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

let A = [1, 2, 3, 4, 5];
console.log(sumArray(A));//Total: 15