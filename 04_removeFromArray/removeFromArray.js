const removeFromArray = function(array) {
	const arr = arguments[0]; //the array received
	const returnThis = arr.filter((x) => {
		for (let i = 1; i < arguments.length; i++){
			if (x === arguments[i]) return false;
		}
		return true;
	})

	return returnThis;
};


// Do not edit below this line
module.exports = removeFromArray;
