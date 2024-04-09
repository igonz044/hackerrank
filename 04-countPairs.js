function countPairs(Arr, target){
    let count = 0;
    //let included=[];

    for(let i = 0; i < Arr.length; i++){
        for(let j = i + 1; j < Arr.length; j++){
            if (i!=j /*&& i!=included.includes(i)*/){
                if(Arr[i]+Arr[j]==target){
                    //included.push(j);
                    count++;
                }
            }
        }
    }
    return count;
}

//Test cases:
let t = 10;
let A = [2, 8, 5, 5, 1, 6];//2

let t2 = 6;
let B = [];//0

let t3 = 10;
let C = [1, 2, 3, 4, 5];//0

let t4 = 6;
let D = [-1, -2, -3, 4, 7];//1

console.log(countPairs(B, t2));