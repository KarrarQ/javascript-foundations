var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }
  
    gazeAtVictim(victims) {
        var newstatue = new Statue(victims.name)  
        if(this.statues.length <= 2) {
            this.statues.push(newstatue)
        } else if(this.statues.length >= 3) {
            var newPerson = new Person(this.statues[0].name)
            newPerson.mood = 'relieved'
            this.statues.shift()
            this.statues.push(newstatue)
            return newPerson
        }     
    }
}

module.exports = Medusa;

// this.statues.push(newstatue)

// if(this.statues.length === 4) {

//     var freePerson = this.statues.shift()
//     var newPerson = new Person(freePerson.name)
//     newPerson.mood = 'relieved'
//     return newPerson

// }