const repeatString = function(string, repeat) {
	let returnThis = '';

	if (repeat < 0) return 'ERROR';
	if (string === '') return '';
	for(let i = 0; i < repeat; i++){
		returnThis += string;
	}
	return returnThis;
};



// Do not edit below this line
module.exports = repeatString;
