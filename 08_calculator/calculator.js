const add = function(x,y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
	if(!arr) return 0;
	
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
	}

	return sum;
};

const multiply = function(arr) {
	let mult = 1;
	

	for(let i = 0; i < arr.length;i++)
		mult *= arr[i];

	return mult;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(num) {
	if (num == 1 || num == 0) return 1;

	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
