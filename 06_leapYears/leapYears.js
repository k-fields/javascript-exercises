const leapYears = function(year) {
	let centuryYear = (year) => {
		return year%100 == 0;
	};

	if (centuryYear(year)){
		return year%400 == 0;
	};

	return year%4 == 0;	
};

// Do not edit below this line
module.exports = leapYears;
