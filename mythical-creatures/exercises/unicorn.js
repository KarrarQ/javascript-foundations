class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    return false
  }
  says(sayings) {
    return `**;* ${sayings} *;**`
  }
}

module.exports = Unicorn;
