const fibonacci = function(num) {
	const parsed = parseInt(num);
	if (parsed < 0) return "OOPS";
	let fibCurrent = 1;
	let temp = 1;
	let numBefore = 0;
	//1 1 2 3 5 8 13 21

	for (let i = 1; i < num; i++){
		temp = numBefore;
		numBefore = fibCurrent;
		fibCurrent += temp;
	}

	return fibCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
