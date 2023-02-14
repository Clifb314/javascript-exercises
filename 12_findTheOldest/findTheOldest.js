const findTheOldest = function(newArr) {
    for (person of newArr) {
        if (person.yearOfDeath === undefined) {
            let today = currentDate.getFullYear()
            this.yearOfDeath = today
        }
    }

    let livesArr = newArr.map((person) => {
        livesArr.name = person.name
        livesArr.lifeSpan = person.yearOfDeath - person.yearOfBirth
    })

    let sorted = livesArr.sort((a, b) => a.lifeSpan - b.lifeSpan)

    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;