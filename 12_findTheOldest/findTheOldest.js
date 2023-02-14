const findTheOldest = function(newArr) {
    for (person of newArr) {
        if (person.yearOfDeath === undefined) {
            let today = new Date()
            today = today.getFullYear()
            person.yearOfDeath = today
        }
    }

    let livesArr = newArr.map((person) => {
        const container = {}
        container.name = person.name
        container.lifeSpan = person.yearOfDeath - person.yearOfBirth
        return container
    })

    let sorted = livesArr.sort((a, b) => b.lifeSpan - a.lifeSpan)

    return sorted[0]
};



//for testing
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people)
//end testing



// Do not edit below this line
module.exports = findTheOldest;