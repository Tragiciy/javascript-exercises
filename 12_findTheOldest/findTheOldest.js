const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldest = people.reduce((acc, cur) => {
        let accAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;

        let curAge = (cur.yearOfDeath || currentYear) - cur.yearOfBirth;

        if (curAge > accAge) {
            return cur
        } else {
            return acc
        }
    }, people[0]);

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
