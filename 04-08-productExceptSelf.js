function productExceptSelf(A){
    let product = [];
    let x = 1;

    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A.length; j++){
            if(i!=j){
                x *= A[j];
            }
        }
        product.push(x);
        x = 1;
    }
    return product;
}

function productExceptSelf2(nums) {
    const n = nums.length;
    
    // Create two arrays to store products of elements to the left and right of each element
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    
    console.log("rrrrrrrrrrP array: "+rightProducts);
    // Calculate products of elements to the left of each element
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
        //console.log("i: "+i);
       //console.log("lfP: "+leftProducts[i]);
    }
    console.log("lP array: "+leftProducts);
    // Calculate products of elements to the right of each element
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
        console.log("i: "+i);
        console.log("rP: "+rightProducts[i]);
    }
    console.log("rP array: "+rightProducts);
    // Calculate the final result by multiplying corresponding elements from leftProducts and rightProducts
    const result = [];
    for (let i = 0; i < n; i++) {

        result[i] = leftProducts[i] * rightProducts[i];
    }
    
    return result;
}

// Test cases
console.log(productExceptSelf2([1, 2, 3, 4, 5])); // Output: [24, 12, 8, 6]


//let A = [1, 2, 3, 4];
//console.log(productExceptSelf(A));