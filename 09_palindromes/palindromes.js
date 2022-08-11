const palindromes = function (phrase) {
	const filtered = () => {
		let stringy = '';
		for (let i = 0; i < phrase.length; i++){
			if (phrase[i].match(/[a-z]/i))
				stringy += phrase[i];
		}
		return stringy;
	}

	console.log(filtered());
}

palindromes("Test, This, Shit");
/*
const string = "My Little Pony";
for (let i = 0; i < string.length; i++){
	if (string[i].match(/[a-z]/i))
		console.log(string[i]);
}
*/
// Do not edit below this line
module.exports = palindromes;
