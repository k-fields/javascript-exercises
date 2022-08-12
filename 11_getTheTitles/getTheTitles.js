const getTheTitles = function(books) {
	const titles = books.map((x) => {
		return x['title'];
	});

	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
