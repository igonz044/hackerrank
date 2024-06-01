function toBinaryConversion(m){
    let mod;
    let n=[];
    let x=[];
    //convert int to binary 
    while(m>0){
        mod = m%2;
        n.push(mod);
        m=(m-mod)/2;
    }
    //reverse
    for(let i = n.length-1; i >= 0; i--){
        x.push(n[i]);
    }
    return x;
}
console.log(toBinaryConversion(4));//0100