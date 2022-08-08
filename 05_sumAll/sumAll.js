const sumAll = function(x,y) {
	if  (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number') return 'ERROR';

	let sum = 0;

	let larger = 0;
	let smaller = 0;
	/*
	if (x > y){
		larger = x;
		smaller = y;
	}
	else
	{
		larger = y;
		smaller = x;
	}
	*/

	x > y ? (() => { larger = x; smaller = y;})():(() => {larger = y; smaller = x;})();

	for (let i = smaller; i <= larger; i++){
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
