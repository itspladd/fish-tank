class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/switch-fish.png';
    this.deadImageUri = '/images/switch-fish-dead.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
