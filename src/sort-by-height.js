const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let j=0;
  while ( j<100){
    let k=0;
    let i=0;
 
  while( k<arr.length-1) {
    if(arr[k]>0) {
      i=k;
      k= k+1
    } else {
      k=k+1
    }
    if(arr[k]>0 && arr[k]<arr[i]){
      key = arr[k];
      arr[k]= arr[i]
      arr[i]=key
    }
    j=j+1;
  }
  }
 return arr;
  //console.log(arr)
}


sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
module.exports = {
  sortByHeight
};
