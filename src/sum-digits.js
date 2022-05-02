const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
 let symb = n.toString();
 let sum = 0;
 for (let i=0; i< symb.length; i++) {
   sum += Number(symb[i])
 }
 if (sum <10){
 console.log(sum)
 return sum }
 else {
   let num = sum.toString();
   let res = 0 ;
   for (let i=0; i< num.length; i++) {
     res += Number (num[i])
   }
   console.log(res);
   return res;
 }
}
getSumOfDigits(91)
module.exports = {
  getSumOfDigits
};
