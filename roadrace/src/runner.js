class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];

    }

    runSomeMiles(miles) {
        this.milesRun += miles
        this.fitness += miles
    }

    stretch() {
        this.fitness+=.5
    }

    runRace(raceName, length) {
        this.completedRaces.push(raceName)
        this.milesRun += length
        this.fitness += length 
        // this.runSomeMiles(length)
    }
}

module.exports = Runner;
