// When we looked up all the people in our data set that lived more than 90 years, 
// only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, 
// as in Math.ceil(person.died / 100).

//CODE AUTHOR = UBOAT46

var ancestry = require('./ancestry');
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {};

ancestry.map(function(person){
  var cent = Math.ceil(person.died / 100);
  cent in centuries ? 
      centuries[cent].push(person.died - person.born) :
      centuries[cent] = [person.died - person.born];
});

for(century in centuries){
  console.log(century +': ' + average(centuries[century]).toFixed(1));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94