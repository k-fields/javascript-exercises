const findTheOldest = function(people) {

	function oldest(people)
	{
		let person;
		let oldest = 0;
		let getAge = (person) => {
			if (!person.yearOfDeath) return 2022-person.yearOfBirth;
			return person.yearOfDeath - person.yearOfBirth;
		};

		for (let i = 0; i < people.length; i++){
			if (i == 0) { 
				person = people[i];
				oldest = getAge(people[i]);
			}
			else
			{
				if (getAge(people[i]) > oldest)
				{
					person = people[i];
					oldest = getAge(people[i]);
				}
			}
		}

		return person;
	}

	//finds the oldest, if any is alive
	//finds the oldest alive
	//finds the oldest, no matter what
	
	const alive = people.filter((x) => {
		if (!x.yearOfDeath) return true;
		return false;
	});

	if (alive) return oldest(people);
	else if (alive) return oldest(alive);
	else return oldest(people);
	console.log("finish");

};

// Do not edit below this line
module.exports = findTheOldest;
