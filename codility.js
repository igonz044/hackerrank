// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, weight) {
    // Implement your solution here
    let count = 0;

    //let removedCars=[];

    for(let i = 0; i < weight.length; i++){
        if(weight[i]>=U){
            console.log(i);
            weight.pop(i);
            count++;
        }
        for(let j = i + 1; j < weight.length; j++){
            if (weight[i]+weight[j]>U){
                weight.pop(j);
                count++;
            }
        }
    }
    return count;
}
A = [5, 3, 8, 1, 8, 7, 7, 6];
U=2;
console.log(solution(U, A));