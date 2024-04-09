//this version takes into account edge cases:
//Array has 1 value or less 
//removes duplicates
//negative values

function maxDifference(oString){
    let small, large;

    if(oString.length <= 1){
        return "No Max Difference";
    }
    
    oString.sort();
    
    //remove duplicates for fun
    //*if using this method make sure to set to a new Array
    let uniqueValues = [...new Set(oString)];

    small = oString[0];
    large = oString[oString.length-1];

    return large - small;
}
A = [1, 1, 2, 3, 3];
B = [-1, -2, 3, 3];
C = [1];
D = [];
console.log(maxDifference(B));