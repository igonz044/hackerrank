//This program finds largest gap in a binary number
//Gap: 0's between two 1's

    let N = 9;
    //convert N int to binary
    // while(N>0){
    //     v.push_back(N%2);
    //     N = N/2;
    // }
    //if N = 9, in binary = 1001
    //9%2=1 N=4
    //4%2=0 N=2
    //2%2=0 N=1
    //1%2=1 N=0

    //for numbers ending or starting with 0
    //ex: 0001001
    //ex: 1001000
    //we will delete them here using v.erase(v.begin()) & v.erase(v.end())
    //test: v=0001001
    let one = false;
    let v = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
    console.log(v);
    console.log(v.length);
    console.log("\n");

    //getting rid of front extra zeros
    for(let i = 0; i < v.length; i++){
        if(v[i]==1){
            break;
        }
        if(v[i]==0){
            v.splice(i, 1);
            i--;
        }
    }
    console.log(v);
    console.log(v.length);

    // Finding max of 2 values:
    // let a = 10;
    // let b = 20;
    // let max = Math.max(a, b);
    // console.log("The maximum of", a, "and", b, "is:", max);

    let count=0;
    let maxcount=0;
    for(let i = 0; i < v.length; i++){
        if(v[i]==0){
            count++;
        }
        if(v[i]==1){
            maxcount = Math.max(maxcount, count);
            count=0;
        }
    }
    console.log("maxcount: "+ maxcount);