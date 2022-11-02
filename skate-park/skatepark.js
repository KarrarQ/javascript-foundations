class SkatePark {
    constructor(skaterObj) {
        this.name = skaterObj.name;
        this.yearFounded = skaterObj.year;
        this.style = skaterObj.type;
        this.features = skaterObj.features;
        this.isPrivate = skaterObj.isPrivate || false;
        this.cost = skaterObj.price || 0;
        this.occupants = [];
    }

}

module.exports = SkatePark;