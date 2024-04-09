//We are returning sum of all positive values in an array

function sumPositive(oString){
    let total = 0;
    for(let i = 0; i < oString.length; i++){
        if(oString[i]>=0){
            total += oString[i];
        }
    }
    return total;
}

let A = [];
console.log(sumPositive(A));