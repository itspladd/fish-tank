class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/switch-fish.png';
  }
  
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
