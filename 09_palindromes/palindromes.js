const palindromes = function (phrase) {
	//filter array for alphabetical characters
	const arrayPhrase = phrase.split(/(,|\.|!|\?)/);
	
	const filtered = arrayPhrase.filter((x) => {
		return x.match(/[a-z]/gi);
	});

	
	console.log(arrayPhrase);
	console.log(filtered);
}

palindromes("Test, This, Shit");
// Do not edit below this line
module.exports = palindromes;
