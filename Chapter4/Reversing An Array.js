// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 

// The first, reverseArray, takes an array as argument and produces a new array that has the same elements 
// in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the 
// array given as argument in order to reverse its elements. Neither may use the standard reverse method.

//CODE AUTHOR = UBOAT46


function reverseArray(arr){
    var newArr = [];
    for(var i = arr.length -1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    var i = 0;
    var j = arr.length -1;
    while(i <= j){
        var x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
        i++;
        j--;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]