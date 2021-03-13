class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.png';
    this.isTasty = false;
  }

  updateOneTick() {
    super.updateOneTick();
    const nearbyFood = this.tank.getProximateDenizens(this.position, 50).filter(fish => fish.isTasty)
    if(nearbyFood.length) {
      nearbyFood.forEach(fish => fish.kill(1));
    }
  }
}
