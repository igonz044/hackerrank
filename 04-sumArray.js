// Define your functions or classes here
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

// Write your main code here
// You can use cout, cin, vectors, arrays, etc.
let A = [1, 2, 3];
console.log("total: " + sumArray(A));