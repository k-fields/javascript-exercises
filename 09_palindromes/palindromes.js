const palindromes = function (phrase) {
	//filter array for alphabetical characters
	const arrayPhrase = phrase.split(' ').join('');
	const filtered = arrayPhrase.filter((x) => {
		return x.match(/[a-z]/gi);
	});

	let len = Math.floor(filtered.length / 2) + 1;

	for (let i = 0; i <= len; i++){
		if (filtered[i] !== filtered[filtered.length - 1 - i])
			return false;
		return true;
	}
}
// Do not edit below this line
module.exports = palindromes;
