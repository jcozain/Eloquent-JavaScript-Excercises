// Use the reduce method in combination with the concat method to “flatten” an array of 
// arrays into a single array that has all the elements of the input arrays.

//CODE AUTHOR = UBOAT46

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(arr,item){
    return arr.concat(item);
}))
// → [1, 2, 3, 4, 5, 6]