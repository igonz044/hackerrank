//Coding problem from Interview Cake
//write a program that calculates the max profit from 
//a list of stock prices ordered from start to end of day

/*You can't just take the difference between the highest price and the lowest price, because the highest price might come before the lowest price. And you have to buy before you can sell.

What if the price goes down all day? In that case, the best profit will be negative.

You can do this in O(n) time and O(1) space!
*/
const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)