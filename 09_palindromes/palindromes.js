const palindromes = function (phrase) {
	const filtered = () => {
		let stringy = '';
		for (let i = 0; i < phrase.length; i++){
			if (phrase[i].match(/[a-z]/i))
				stringy += phrase[i];
		}
		return stringy.toLowerCase();
	}

	function checkPalindrome(string, len){
		const middleIndex = (() => {
			if (len % 2 == 0)
				return len / 2;
			return Math.floor(len/2) + 1;
		})();

		for (let i = 0; i < middleIndex - 1; i++){
			if (string[i] != string[len-1-i])
				return false;
		}
		return true;
	}

	return checkPalindrome(filtered(), filtered().length);
}

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
