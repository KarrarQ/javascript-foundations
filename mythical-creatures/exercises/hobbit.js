class Hobbit {
    constructor(obj) {
        this.name = obj.name;
        this.age = 0;
        this.adult = false;
        this.old = false;
        this.hasRing = false
    }
    celebrateBirthday() {
        this.age++
    }
    timeTravel() {
    if (this.age <= 32) {
      this.adult = false;
    }
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }
  getRing() {
    if(this.name === 'Frodo' ){
        this.hasRing = true
        return 'Here is the ring!'
        } else {
        return 'You can\'t have it!' 
        }
    }
}


module.exports = Hobbit;