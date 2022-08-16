const caesar = function(string, shifts) {
	let returnThis = '';
	let adjustedShifts = shifts % 26;

	for (let i = 0; i < string.length; i++) {
		let letterCode = string[i].charCodeAt();
		let asciiUpperCaseLowerBound = 0x41; //character 'A'
		let asciiUpperCaseUpperBound = 0x5A; //character 'Z'
		let asciiLowerCaseUpperBound = 0x7A; //character 'z'
		let asciiLowerCaseLowerBound = 0x61; //character 'a'

		if (string[i].match(/[\s!,\.]/i)) {
			returnThis += string[i];
			continue;
		}
		
		if (string[i].match(/[A-Z]/)) { //maiúscula
			if (adjustedShifts < 0) { //negative shift
				
				if (letterCode + adjustedShifts < asciiUpperCaseLowerBound)
				{
					let shiftsRemainingPostLowerBound = Math.abs(adjustedShifts) - (letterCode - asciiUpperCaseLowerBound);
					let finalCharCode = asciiUpperCaseUpperBound + 1 - shiftsRemainingPostLowerBound;
					console.log(`Adjusted Shifts: ${adjustedShifts}`)
					returnThis += String.fromCharCode(finalCharCode);
				}
				else{
					returnThis += String.fromCharCode(letterCode + adjustedShifts);
					console.log(`Code: ${(letterCode + adjustedShifts)} - Letter: ${String.fromCharCode(letterCode + adjustedShifts)}`)
				}
			}
			else {
				if (letterCode + adjustedShifts > asciiUpperCaseUpperBound) { 
					let shiftsRemainingPostUpperBound = (letterCode + adjustedShifts) % asciiUpperCaseUpperBound;
					let finalCharCode = asciiUpperCaseLowerBound + shiftsRemainingPostUpperBound - 1;					
					returnThis += String.fromCharCode(finalCharCode);
				}
				else
					returnThis += String.fromCharCode(letterCode + adjustedShifts)
			}
			continue;
		}
		//minúscula
			if (adjustedShifts < 0) { //negative shift
				
				if (letterCode + adjustedShifts < asciiLowerCaseLowerBound)
				{
					let shiftsRemainingPostLowerBound = Math.abs(adjustedShifts) - (letterCode - asciiLowerCaseLowerBound);
					let finalCharCode = asciiLowerCaseUpperBound + 1 - shiftsRemainingPostLowerBound;
					returnThis += String.fromCharCode(finalCharCode);
				}
				else
					returnThis += String.fromCharCode(letterCode + adjustedShifts);
			}
			else {
				if (letterCode + adjustedShifts > asciiLowerCaseUpperBound) { 
					let shiftsRemainingPostUpperBound = (letterCode + adjustedShifts) % asciiLowerCaseUpperBound;
					let finalCharCode = asciiLowerCaseLowerBound + shiftsRemainingPostUpperBound - 1;					
					returnThis += String.fromCharCode(finalCharCode);
				}
				else
					returnThis += String.fromCharCode(letterCode + adjustedShifts)
			}	
	}

	return returnThis;
};

// Do not edit below this line
module.exports = caesar;
